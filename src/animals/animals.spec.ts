import { Test, TestingModule } from '@nestjs/testing';
import { Animals } from './animals';
import { PrismaService } from 'src/prisma-service/prisma-service';
import { StorageService } from 'src/storage/storage.service';

describe('Animals', () => {
  let provider: Animals;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Animals,
        {
          provide: PrismaService,
          useValue: {
            animals: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
        {
          provide: StorageService,
          useValue: {
            uploadAnimalPhoto: jest.fn(),
          },
        },
      ],
    }).compile();

    provider = module.get<Animals>(Animals);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
