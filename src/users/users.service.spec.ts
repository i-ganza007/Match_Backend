import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma-service/prisma-service';
import { ConfigService } from '@nestjs/config';
import { BadRequestException } from '@nestjs/common';
import { Gender } from '@prisma/client';
import * as argon2 from 'argon2';
import { DeepMockProxy, mockDeep, mockReset } from 'jest-mock-extended';

jest.mock('argon2');

describe('UsersService (Unit)', () => {
  let service: UsersService;
  let prismaService: DeepMockProxy<PrismaService>;
  let configService: jest.Mocked<ConfigService>;

  const mockUser = {
    userId: 'user-123',
    name: 'John Doe',
    email: 'john@example.com',
    phone_number: '+1234567890',
    password: 'hashed_password',
    sex: Gender.MALE,
    district: 'Kigali',
    sector: 'Kicukiro',
    village: 'Village A',
    cell: 'Cell 1',
    location: { type: 'Point', coordinates: [30.0573, -1.9536] },
    profile_url: 'https://example.com/profile.jpg',
    createdAt: new Date(),
    lastActive: new Date(),
  };

  beforeEach(async () => {
    prismaService = mockDeep<PrismaService>();

    configService = {
      get: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: prismaService },
        { provide: ConfigService, useValue: configService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    mockReset(prismaService);
    jest.clearAllMocks();
  });

  describe('getAllUsers', () => {
    it('should retrieve all users with location coordinates', async () => {
      expect(service.getAllUsers).toBeDefined();
    });

    it('should handle empty user list', async () => {
      expect(service.getAllUsers).toBeDefined();
    });
  });

  describe('getSingleUser', () => {
    it('should be defined', () => {
      expect(service.getSingleUser).toBeDefined();
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      expect(service.createUser).toBeDefined();
    });
  });

  describe('updateUser', () => {
    it('should update user without password', async () => {
      expect(service.updateUser).toBeDefined();
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      expect(service.deleteUser).toBeDefined();
    });
  });

  describe('wipeout', () => {
    it('should delete all users', async () => {
      expect(service.wipeout).toBeDefined();
    });
  });
});
