import { Test, TestingModule } from '@nestjs/testing';
import { AppGateway } from './messages';
import { PrismaService } from 'src/prisma-service/prisma-service';
import { Redis } from 'src/redis/redis';
import { JwtService } from '@nestjs/jwt';
import { Server, Socket } from 'socket.io';
import { DeepMockProxy, mockDeep, mockReset } from 'jest-mock-extended';

describe('AppGateway (WebSocket Unit)', () => {
  let gateway: AppGateway;
  let prismaService: DeepMockProxy<PrismaService>;
  let redisService: jest.Mocked<Redis>;
  let jwtService: jest.Mocked<JwtService>;
  let mockSocket: jest.Mocked<Socket>;
  let mockServer: jest.Mocked<Server>;

  const mockJwtPayload = {
    id: 'user-123',
    email: 'test@example.com',
    iat: Math.floor(Date.now() / 1000),
  };

  const mockJwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

  beforeEach(async () => {
    prismaService = mockDeep<PrismaService>();

    redisService = {
      ping: jest.fn(),
      set: jest.fn(),
      get: jest.fn(),
      del: jest.fn(),
    } as any;

    jwtService = {
      verifyAsync: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppGateway,
        { provide: PrismaService, useValue: prismaService },
        { provide: Redis, useValue: redisService },
        { provide: JwtService, useValue: jwtService },
      ],
    }).compile();

    gateway = module.get<AppGateway>(AppGateway);

    // Mock Socket
    mockSocket = {
      id: 'socket-456',
      handshake: {
        auth: { token: mockJwtToken },
        headers: {},
      },
      on: jest.fn(),
      emit: jest.fn(),
      disconnect: jest.fn(),
    } as any;

    // Mock Server
    mockServer = {
      to: jest.fn().mockReturnThis(),
      emit: jest.fn(),
    } as any;

    // Set the mocked server
    (gateway as any).server = mockServer;
  });

  afterEach(() => {
    mockReset(prismaService);
    jest.clearAllMocks();
  });

  describe('handleConnection', () => {
    it('should authenticate user and store socket-to-user mapping', async () => {
      jwtService.verifyAsync.mockResolvedValueOnce(mockJwtPayload);
      redisService.set.mockResolvedValue(undefined);

      await gateway.handleConnection(mockSocket);

      expect(jwtService.verifyAsync).toHaveBeenCalledWith(mockJwtToken, {
        secret: process.env.JWT_SECRET,
      });
      expect(redisService.set).toHaveBeenCalledWith(`ws:user:${mockJwtPayload.id}`, mockSocket.id);
      expect(redisService.set).toHaveBeenCalledWith(`ws:socket:${mockSocket.id}`, mockJwtPayload.id);
    });

    it('should reject connection if no token provided', async () => {
      const socketNoAuth = {
        ...mockSocket,
        handshake: { auth: {}, headers: {} },
      } as any;

      await gateway.handleConnection(socketNoAuth);

      expect(redisService.set).not.toHaveBeenCalled();
    });

    it('should reject connection if JWT is invalid', async () => {
      jwtService.verifyAsync.mockRejectedValueOnce(new Error('Invalid token'));

      await gateway.handleConnection(mockSocket);

      expect(redisService.set).not.toHaveBeenCalled();
    });

    it('should handle alternative jwt auth field', async () => {
      const socketWithJwt = {
        ...mockSocket,
        handshake: { auth: { jwt: mockJwtToken }, headers: {} },
      } as any;

      jwtService.verifyAsync.mockResolvedValueOnce(mockJwtPayload);
      redisService.set.mockResolvedValue(undefined);

      await gateway.handleConnection(socketWithJwt);

      expect(jwtService.verifyAsync).toHaveBeenCalled();
      expect(redisService.set).toHaveBeenCalledTimes(2);
    });

    it('should handle JWT tokens with sub field instead of id', async () => {
      const payloadWithSub = { ...mockJwtPayload, id: undefined, sub: 'user-789' };
      jwtService.verifyAsync.mockResolvedValueOnce(payloadWithSub);
      redisService.set.mockResolvedValue(undefined);

      await gateway.handleConnection(mockSocket);

      expect(redisService.set).toHaveBeenCalledWith('ws:user:user-789', mockSocket.id);
    });
  });

  describe('handleMessage', () => {
    it('should send message to recipient and save to database', async () => {
      const messagePayload = {
        message: 'Hello!',
        userTo: 'user-456',
      };

      redisService.get.mockResolvedValueOnce('user-123'); // sender ID
      redisService.get.mockResolvedValueOnce('socket-789'); // recipient socket ID
      prismaService.client.messages.create.mockResolvedValueOnce({ id: 'msg-123' } as any);

      const result = await gateway.handleMessage(mockSocket, messagePayload);

      expect(redisService.get).toHaveBeenCalledWith(`ws:socket:${mockSocket.id}`);
      expect(redisService.get).toHaveBeenCalledWith(`ws:user:${messagePayload.userTo}`);
      expect(mockServer.to).toHaveBeenCalledWith('socket-789');
      expect(mockServer.emit).toHaveBeenCalledWith('msgToClient', {
        from: 'user-123',
        message: 'Hello!',
      });
      expect(prismaService.client.messages.create).toHaveBeenCalledWith({
        data: {
          senderId: 'user-123',
          receiverId: 'user-456',
          content: 'Hello!',
          status: 'SENT',
          messageType: 'TEXT',
        },
      });
      expect('delivered' in result && result.delivered).toBe(true);
    });

    it('should save message even if recipient is offline', async () => {
      const messagePayload = {
        message: 'Hello offline user!',
        userTo: 'user-456',
      };

      redisService.get.mockResolvedValueOnce('user-123'); // sender ID
      redisService.get.mockResolvedValueOnce(null); // recipient socket ID (offline)
      prismaService.client.messages.create.mockResolvedValueOnce({ id: 'msg-123' } as any);

      const result = await gateway.handleMessage(mockSocket, messagePayload);

      expect(prismaService.client.messages.create).toHaveBeenCalled();
      expect('delivered' in result && result.delivered).toBe(false);
    });

    it('should return error if sender not authenticated', async () => {
      const messagePayload = {
        message: 'Hello!',
        userTo: 'user-456',
      };

      redisService.get.mockResolvedValueOnce(null); // sender not in Redis

      const result = await gateway.handleMessage(mockSocket, messagePayload);

      expect(result).toEqual({ error: 'Sender is not authenticated.' });
      expect(prismaService.client.messages.create).not.toHaveBeenCalled();
    });

    it('should validate payload structure', async () => {
      const invalidPayload = { message: 'Hello' }; // Missing userTo

      const result = await gateway.handleMessage(mockSocket, invalidPayload as any);

      expect(result).toEqual({ error: expect.stringContaining('Invalid payload') });
    });
  });

  describe('handleDisconnect', () => {
    it('should clean up socket and user mappings', async () => {
      redisService.get.mockResolvedValueOnce('user-123'); // userId from socket mapping
      redisService.del.mockResolvedValue(1);

      await gateway.handleDisconnect(mockSocket);

      expect(redisService.get).toHaveBeenCalledWith(`ws:socket:${mockSocket.id}`);
      expect(redisService.del).toHaveBeenCalledWith(`ws:socket:${mockSocket.id}`);
      expect(redisService.del).toHaveBeenCalledWith(`ws:user:user-123`);
    });

    it('should handle cleanup when socket not in Redis', async () => {
      redisService.get.mockResolvedValueOnce(null); // socket not found
      redisService.del.mockResolvedValue(0);

      await gateway.handleDisconnect(mockSocket);

      expect(redisService.get).toHaveBeenCalled();
      expect(redisService.del).toHaveBeenCalledWith(`ws:socket:${mockSocket.id}`);
      // Should not try to delete user mapping if no userId found
    });
  });

  describe('afterInit', () => {
    it('should log initialization', async () => {
      const loggerSpy = jest.spyOn((gateway as any).logger, 'log');

      gateway.afterInit(mockServer);

      expect(loggerSpy).toHaveBeenCalledWith('Init');
    });
  });

  describe('Integration scenarios', () => {
    it('should handle complete message flow: connect → send → disconnect', async () => {
      // 1. Connect sender
      jwtService.verifyAsync.mockResolvedValueOnce(mockJwtPayload);
      redisService.set.mockResolvedValue(undefined);
      await gateway.handleConnection(mockSocket);

      // 2. Send message
      const messagePayload = { message: 'Hi!', userTo: 'user-456' };
      redisService.get.mockResolvedValueOnce('user-123').mockResolvedValueOnce('socket-789');
      prismaService.client.messages.create.mockResolvedValueOnce({ id: 'msg-123' } as any);
      const sendResult = await gateway.handleMessage(mockSocket, messagePayload);

      expect('delivered' in sendResult && sendResult.delivered).toBe(true);

      // 3. Disconnect
      redisService.get.mockResolvedValueOnce('user-123');
      redisService.del.mockResolvedValue(1);
      await gateway.handleDisconnect(mockSocket);

      expect(redisService.del).toHaveBeenCalledTimes(2);
    });

    it('should handle multiple concurrent connections', async () => {
      // Simulate multiple users connecting
      const sockets = [
        { ...mockSocket, id: 'socket-1', handshake: { auth: { token: mockJwtToken }, headers: {} } },
        { ...mockSocket, id: 'socket-2', handshake: { auth: { token: mockJwtToken }, headers: {} } },
      ];

      jwtService.verifyAsync.mockResolvedValue(mockJwtPayload);
      redisService.set.mockResolvedValue(undefined);

      await Promise.all(sockets.map(s => gateway.handleConnection(s as any)));

      expect(redisService.set).toHaveBeenCalledTimes(4); // 2 sockets × 2 mappings each
    });
  });

  describe('Error handling', () => {
    it('should handle Redis errors gracefully', async () => {
      jwtService.verifyAsync.mockResolvedValueOnce(mockJwtPayload);
      redisService.set.mockRejectedValueOnce(new Error('Redis unavailable'));

      // Should not throw, just log warning
      await expect(gateway.handleConnection(mockSocket)).rejects.toThrow('Redis unavailable');
    });

    it('should handle database save errors', async () => {
      const messagePayload = { message: 'Test', userTo: 'user-456' };

      redisService.get.mockResolvedValueOnce('user-123').mockResolvedValueOnce(null);
      prismaService.client.messages.create.mockRejectedValueOnce(new Error('DB error'));

      await expect(
        gateway.handleMessage(mockSocket, messagePayload),
      ).rejects.toThrow();
    });
  });
});
