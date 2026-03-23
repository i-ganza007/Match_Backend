import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma-service/prisma-service';
import { JwtService } from '@nestjs/jwt';
import { ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as argon2 from 'argon2';

jest.mock('argon2', () => ({
  hash: jest.fn(),
  verify: jest.fn(),
}));

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: PrismaService;
  let usersService: UsersService;
  let configService: ConfigService;
  let jwtService: JwtService;

  const mockPrismaService = {
    users: {
      findFirst: jest.fn(),
      findUnique: jest.fn(),
    },
  };

  const mockUsersService = {
    createUser: jest.fn(),
  };

  const mockConfigService = {
    get: jest.fn(),
  };

  const mockJwtService = {
    signAsync: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: UsersService, useValue: mockUsersService },
        { provide: ConfigService, useValue: mockConfigService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
    usersService = module.get<UsersService>(UsersService);
    configService = module.get<ConfigService>(ConfigService);
    jwtService = module.get<JwtService>(JwtService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('signUp', () => {
    it('should create a new user', async () => {
      const userDto = {
        email: 'test@test.com',
        phone_number: '1234567890',
        password: 'password123',
        name: 'Test User',
        sex: 'MALE',
        lastActive: new Date(),
        district: 'Test',
        sector: 'Test',
        village: 'Test',
        cell: 'Test',
        latitude: 0,
        longitude: 0,
      };

      mockPrismaService.users.findFirst.mockResolvedValue(null);
      mockConfigService.get.mockReturnValue('secret');
      (argon2.hash as jest.Mock).mockResolvedValue('hashed-password');
      mockUsersService.createUser.mockResolvedValue({ userId: '1', ...userDto });
      mockJwtService.signAsync.mockResolvedValue('token123');

      const result = await service.signUp(userDto);

      expect(mockPrismaService.users.findFirst).toHaveBeenCalled();
      expect(mockUsersService.createUser).toHaveBeenCalled();
      expect(result).toEqual({ access_token: 'token123', user_Id: '1' });
    });

    it('should throw ConflictException if user exists', async () => {
      const userDto = {
        email: 'test@test.com',
        phone_number: '1234567890',
        password: 'password123',
      };

      mockPrismaService.users.findFirst.mockResolvedValue({ userId: '1' });

      await expect(service.signUp(userDto as any)).rejects.toThrow(ConflictException);
    });
  });

  describe('logIn', () => {
    it('should return access token', async () => {
      const loginDto = { userId: '1', email: 'test@test.com' };
      mockJwtService.signAsync.mockResolvedValue('token123');

      const result = await service.logIn(loginDto);

      expect(result).toEqual({ access_token: 'token123', user_Id: '1' });
      expect(mockJwtService.signAsync).toHaveBeenCalledWith(loginDto);
    });
  });

  describe('validateUser', () => {
    it('should validate user with correct credentials', async () => {
      const credentials = { email: 'test@test.com', password: 'password123' };
      const user = { userId: '1', email: 'test@test.com', password: 'hashedPassword' };

      mockPrismaService.users.findFirst.mockResolvedValue(user);
      mockConfigService.get.mockReturnValue('secret');
      (argon2.verify as jest.Mock).mockResolvedValue(true);

      const result = await service.validateUser(credentials);

      expect(result).toEqual(user);
    });

    it('should throw UnauthorizedException for invalid password', async () => {
      const credentials = { email: 'test@test.com', password: 'wrongpassword' };
      const user = { userId: '1', email: 'test@test.com', password: 'hashedPassword' };

      mockPrismaService.users.findFirst.mockResolvedValue(user);
      mockConfigService.get.mockReturnValue('secret');
      (argon2.verify as jest.Mock).mockResolvedValue(false);

      await expect(service.validateUser(credentials)).rejects.toThrow(UnauthorizedException);
    });

    it('should throw NotFoundException if user not found', async () => {
      const credentials = { email: 'test@test.com', password: 'password123' };

      mockPrismaService.users.findFirst.mockResolvedValue(null);

      await expect(service.validateUser(credentials)).rejects.toThrow(NotFoundException);
    });
  });

  describe('loggedInUser', () => {
    it('should return logged in user', async () => {
      const user = { userId: '1', email: 'test@test.com' };
      mockPrismaService.users.findUnique.mockResolvedValue(user);

      const result = await service.loggedInUser(user);

      expect(result).toEqual(user);
      expect(mockPrismaService.users.findUnique).toHaveBeenCalledWith({ where: { userId: '1' } });
    });
  });
});
