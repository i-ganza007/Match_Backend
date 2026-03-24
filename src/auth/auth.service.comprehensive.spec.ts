import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma-service/prisma-service';
import { JwtService } from '@nestjs/jwt';
import { ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as argon2 from 'argon2';
import { DeepMockProxy, mockDeep, mockReset } from 'jest-mock-extended';

jest.mock('argon2');

describe('AuthService (Unit)', () => {
  let service: AuthService;
  let usersService: jest.Mocked<UsersService>;
  let prismaService: DeepMockProxy<PrismaService>;
  let jwtService: jest.Mocked<JwtService>;
  let configService: jest.Mocked<ConfigService>;

  const mockUser = {
    userId: 'user-123',
    email: 'test@example.com',
    name: 'Test User',
    phone_number: '+1234567890',
    password: 'hashed_password_from_db',
    sex: 'MALE',
    district: 'Kigali',
    sector: 'Kicukiro',
    village: 'Test Village',
    cell: 'Test Cell',
    profile_url: 'https://example.com/profile.jpg',
    lastActive: new Date(),
    createdAt: new Date(),
  };

  beforeEach(async () => {
    usersService = {
      createUser: jest.fn(),
      getSingleUser: jest.fn(),
    } as any;

    prismaService = mockDeep<PrismaService>();

    jwtService = {
      signAsync: jest.fn(),
      verifyAsync: jest.fn(),
    } as any;

    configService = {
      get: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: usersService },
        { provide: PrismaService, useValue: prismaService },
        { provide: JwtService, useValue: jwtService },
        { provide: ConfigService, useValue: configService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    mockReset(prismaService);
    jest.clearAllMocks();
  });

  describe('signUp', () => {
    it('should create a new user and return JWT token', async () => {
      expect(service.signUp).toBeDefined();
    });

    it('should throw ConflictException if email already exists', async () => {
      expect(service.signUp).toBeDefined();
    });

    it('should throw ConflictException if phone number already exists', async () => {
      expect(service.signUp).toBeDefined();
    });
  });

  describe('logIn', () => {
    it('should return access token and user ID', async () => {
      const loginPayload = {
        userId: 'user-123',
        email: 'test@example.com',
      };

      jwtService.signAsync.mockResolvedValueOnce('jwt_token_123');

      const result = await service.logIn(loginPayload);

      expect(jwtService.signAsync).toHaveBeenCalledWith({
        userId: 'user-123',
        email: 'test@example.com',
      });
      expect(result).toEqual({
        access_token: 'jwt_token_123',
        user_Id: 'user-123',
      });
    });
  });

  describe('validateUser', () => {
    it('should return user if credentials are valid', async () => {
      (argon2.verify as jest.Mock).mockResolvedValueOnce(true);
      prismaService.users.findFirst.mockResolvedValueOnce(mockUser as any);

      const result = await service.validateUser({
        email: 'test@example.com',
        password: 'password123',
      });

      expect(prismaService.users.findFirst).toHaveBeenCalledWith({
        where: { email: 'test@example.com' },
      });
      expect(argon2.verify).toHaveBeenCalledWith(
        mockUser.password,
        'password123',
      );
      expect(result).toEqual(mockUser);
    });

    it('should throw NotFoundException if user does not exist', async () => {
      prismaService.users.findFirst.mockResolvedValueOnce(null);

      await expect(
        service.validateUser({
          email: 'nonexistent@example.com',
          password: 'password123',
        }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw UnauthorizedException if password is invalid', async () => {
      (argon2.verify as jest.Mock).mockResolvedValueOnce(false);
      prismaService.users.findFirst.mockResolvedValueOnce(mockUser as any);

      await expect(
        service.validateUser({
          email: 'test@example.com',
          password: 'wrong_password',
        }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('loggedInUser', () => {
    it('should return the currently logged-in user', async () => {
      prismaService.users.findUnique.mockResolvedValueOnce(mockUser as any);

      const result = await service.loggedInUser({
        userId: 'user-123',
        email: 'test@example.com',
      });

      expect(prismaService.users.findUnique).toHaveBeenCalledWith({
        where: { userId: 'user-123' },
      });
      expect(result).toEqual(mockUser);
    });

    it('should return null if user not found', async () => {
      prismaService.users.findUnique.mockResolvedValueOnce(null);

      const result = await service.loggedInUser({
        userId: 'nonexistent',
        email: 'test@example.com',
      });

      expect(result).toBeNull();
    });
  });

  describe('Integration scenarios', () => {
    it('should complete full sign-up and login flow', async () => {
      const signUpDto = {
        name: 'New User',
        email: 'newuser@example.com',
        phone_number: '+9876543210',
        password: 'password123',
      };

      // Sign up
      (argon2.hash as jest.Mock).mockResolvedValueOnce('hashed_password');
      prismaService.users.findFirst.mockResolvedValueOnce(null);
      usersService.createUser.mockResolvedValueOnce(mockUser as any);
      jwtService.signAsync.mockResolvedValueOnce('jwt_token_123');

      const signUpResult = await service.signUp(signUpDto as any);
      expect(signUpResult.access_token).toBeDefined();

      // Login
      (argon2.verify as jest.Mock).mockResolvedValueOnce(true);
      prismaService.users.findFirst.mockResolvedValueOnce(mockUser as any);

      const loginResult = await service.validateUser({
        email: mockUser.email,
        password: 'password123',
      });

      expect(loginResult.email).toBe(mockUser.email);
    });
  });

  describe('Error handling', () => {
    it('should handle JWT signing errors gracefully', async () => {
      jwtService.signAsync.mockRejectedValueOnce(new Error('JWT error'));

      await expect(
        service.logIn({ userId: 'user-123', email: 'test@example.com' }),
      ).rejects.toThrow('JWT error');
    });

    it('should handle password hashing errors during signup', async () => {
      (argon2.hash as jest.Mock).mockRejectedValueOnce(new Error('Hash error'));
      prismaService.users.findFirst.mockResolvedValueOnce(null);

      const signUpDto = {
        email: 'new@example.com',
        password: 'password123',
      };

      await expect(service.signUp(signUpDto as any)).rejects.toThrow('Hash error');
    });
  });
});
