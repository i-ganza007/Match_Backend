import { Test, TestingModule } from '@nestjs/testing';
import { AppGateway } from './messages';
import { PrismaService } from 'src/prisma-service/prisma-service';
import { Redis } from 'src/redis/redis';
import { JwtService } from '@nestjs/jwt';
import { DeepMockProxy, mockDeep, mockReset } from 'jest-mock-extended';
describe('AppGateway (Unit)', () => {
  let gateway: AppGateway;
  let prismaService: DeepMockProxy<PrismaService>;

  beforeEach(async () => {
    prismaService = mockDeep<PrismaService>();

    const mockRedisService = {
      ping: jest.fn().mockResolvedValue('PONG'),
      set: jest.fn().mockResolvedValue(undefined),
      get: jest.fn().mockResolvedValue(null),
      del: jest.fn().mockResolvedValue(0),
    };

    const mockJwtService = {
      verifyAsync: jest.fn().mockResolvedValue({}),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppGateway,
        { provide: PrismaService, useValue: prismaService },
        { provide: Redis, useValue: mockRedisService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    gateway = module.get<AppGateway>(AppGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  afterEach(() => {
    mockReset(prismaService);
  });
});
