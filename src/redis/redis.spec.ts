import { Test, TestingModule } from '@nestjs/testing';
import { Redis } from './redis';
import { REDIS_CLIENT } from './redis.constants';

describe('Redis', () => {
  let provider: Redis;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Redis,
        {
          provide: REDIS_CLIENT,
          useValue: {
            ping: jest.fn(),
            set: jest.fn(),
            get: jest.fn(),
            del: jest.fn(),
            quit: jest.fn(),
          },
        },
      ],
    }).compile();

    provider = module.get<Redis>(Redis);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
