import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger,Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma-service/prisma-service';
import { Redis } from 'src/redis/redis';
import { JwtService } from '@nestjs/jwt';
import { extractTokenFromSocket } from './extractTokenFromSocket';

type MessagePayload = {
  message: string;
  userTo: string;
};

type JwtPayloadShape = {
  userId?: string;
  id?: string;
  sub?: string;
};

@Injectable()
@WebSocketGateway(8000, { transports: ['websocket'],cors:{origin:"*",credentials:true} })
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private readonly logger: Logger = new Logger('AppGateway');

  constructor(
    private readonly prismaService: PrismaService,
    private readonly redis: Redis,
    private readonly jwtService: JwtService,
  ) {}

  private extractToken(client: Socket): string | null {
    return extractTokenFromSocket(client);
  }

  private async resolveUserIdFromToken(token: string): Promise<string | null> {
    try {
      const payload = await this.jwtService.verifyAsync<JwtPayloadShape>(token, {
        secret: process.env.JWT_SECRET,
      });
      const userId = payload?.userId ?? payload?.id ?? payload?.sub;
      return typeof userId === 'string' && userId.length > 0 ? userId : null;
    } catch {
      return null;
    }
  }

  @SubscribeMessage('msgToServer')
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: MessagePayload,
  ): Promise<{ delivered: boolean } | { error: string }> {
    console.log('Checking #1')
    if (!payload?.message || !payload?.userTo) {
      return { error: 'Invalid payload. Expected { message, userTo }.' };
    }
    console.log('Checking #2')
    const senderId = await this.redis.get(`ws:socket:${client.id}`);
    if (!senderId) {
      return { error: 'Sender is not authenticated.' };
    }
    console.log('Checking #3')
    const receiverSocketId = await this.redis.get(`ws:user:${payload.userTo}`);
    console.log('Checking #4 — receiverSocketId:', receiverSocketId)
    if (receiverSocketId) {
      this.server
        .to(receiverSocketId)
        .emit('msgToClient', { from: senderId, message: payload.message });
    }
    console.log('Checking #5')
    try {
      console.log('Checking #6')
      await this.prismaService.client.messages.create({
        data: {
          senderId,
          receiverId: payload.userTo,
          content: payload.message,
          status: 'SENT',
          messageType: 'TEXT',
        },
      });
      console.log('Checking #7')
    } catch (err) {
      this.logger.error(`Failed to persist message: ${err.message}`);
      return { error: 'Failed to save message.' };
    }
    console.log('Checking #8')
    return { delivered: Boolean(receiverSocketId) };
  }

  afterInit(_server: Server) {
    this.logger.log('Init');
  }

  async handleConnection(client: Socket): Promise<void> {
    this.logger.log(`Client connected: ${client.id}`);

    const token = this.extractToken(client);
    if (!token) {
      this.logger.warn(`Socket ${client.id} connected without token.`);
      client.disconnect();
      return;
    }

    const userId = await this.resolveUserIdFromToken(token);
    if (!userId) {
      this.logger.warn(`Socket ${client.id} provided invalid token.`);
      client.disconnect();
      return;
    }

    try {
      await this.redis.set(`ws:user:${userId}`, client.id);
      await this.redis.set(`ws:socket:${client.id}`, userId);
    } catch (err) {
      this.logger.error(`Failed to register socket ${client.id}: ${err.message}`);
      client.disconnect();
    }
  }

  async handleDisconnect(client: Socket): Promise<void> {
    this.logger.log(`Client disconnected: ${client.id}`);

    const userId = await this.redis.get(`ws:socket:${client.id}`);
    await this.redis.del(`ws:socket:${client.id}`);

    if (userId) {
      await this.redis.del(`ws:user:${userId}`);
    }
  }
}
