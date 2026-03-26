import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma-service/prisma-service';
import * as argon2 from 'argon2';

describe('UsersService', () => {
  let service: UsersService;
  let prismaService: PrismaService;
  let configService: ConfigService;

  const mockPrismaService = {
    users: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      deleteMany: jest.fn(),
    },
  };

  const mockConfigService = {
    get: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prismaService = module.get<PrismaService>(PrismaService);
    configService = module.get<ConfigService>(ConfigService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllUsers', () => {
    it('should return all users', async () => {
      const users = [{ userId: '1', name: 'Test User' }];
      mockPrismaService.users.findMany.mockResolvedValue(users);

      const result = await service.getAllUsers();

      expect(result).toEqual(users);
      expect(mockPrismaService.users.findMany).toHaveBeenCalled();
    });
  });

  describe('getSingleUser', () => {
    it('should return a single user', async () => {
      const user = { userId: '1', name: 'Test User' };
      mockPrismaService.users.findUnique.mockResolvedValue(user);

      const result = await service.getSingleUser('1');

      expect(result).toEqual(user);
      expect(mockPrismaService.users.findUnique).toHaveBeenCalledWith({ where: { userId: '1' } });
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userDto = {
        name: 'Test User',
        sex: 'MALE',
        password: 'hashedPassword',
        phone_number: '1234567890',
        email: 'test@test.com',
        lastActive: new Date(),
        district: 'Test',
        sector: 'Test',
        village: 'Test',
        cell: 'Test',
        latitude: '0',
        longitude: '0',
      };

      const createdUser = { userId: '1', ...userDto };
      mockPrismaService.users.create.mockResolvedValue(createdUser);

      const result = await service.createUser(userDto as any);

      expect(result).toEqual(createdUser);
      expect(mockPrismaService.users.create).toHaveBeenCalledWith({ data: userDto });
    });
  });

  describe('updateUser', () => {
    it('should update user without password', async () => {
      const updateDto = { name: 'Updated Name' };
      const updatedUser = { userId: '1', name: 'Updated Name' };

      mockPrismaService.users.update.mockResolvedValue(updatedUser);

      const result = await service.updateUser('1', updateDto);

      expect(result).toEqual(updatedUser);
      expect(mockPrismaService.users.update).toHaveBeenCalledWith({
        where: { userId: '1' },
        data: updateDto,
      });
    });

    it('should update user with hashed password', async () => {
      const updateDto = { password: 'newPassword' };
      const updatedUser = { userId: '1', password: 'hashedPassword' };

      mockConfigService.get.mockReturnValue('secret');
      jest.spyOn(argon2, 'hash').mockResolvedValue('hashedPassword' as any);
      mockPrismaService.users.update.mockResolvedValue(updatedUser);

      const result = await service.updateUser('1', updateDto);

      expect(result).toEqual(updatedUser);
      expect(mockPrismaService.users.update).toHaveBeenCalled();
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      const deletedUser = { userId: '1', name: 'Test User' };
      mockPrismaService.users.delete.mockResolvedValue(deletedUser);

      const result = await service.deleteUser('1');

      expect(result).toEqual(deletedUser);
      expect(mockPrismaService.users.delete).toHaveBeenCalledWith({ where: { userId: '1' } });
    });
  });

  describe('wipeout', () => {
    it('should delete all users', async () => {
      mockPrismaService.users.deleteMany.mockResolvedValue({ count: 5 });

      const result = await service.wipeout();

      expect(result).toEqual({ count: 5 });
      expect(mockPrismaService.users.deleteMany).toHaveBeenCalledWith({});
    });
  });
});
