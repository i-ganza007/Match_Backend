import { Test, TestingModule } from '@nestjs/testing';
import { RedisController } from './redis.controller';
import { Redis } from './redis';

describe('RedisController', () => {
  let controller: RedisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedisController],
      providers: [
        {
          provide: Redis,
          useValue: {
            ping: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<RedisController>(RedisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});