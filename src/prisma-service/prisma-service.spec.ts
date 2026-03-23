import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma-service';
import { ConfigService } from '@nestjs/config';

describe('PrismaService', () => {
  let provider: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('postgresql://user:password@localhost:5432/testdb'),
          },
        },
      ],
    }).compile();

    provider = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
