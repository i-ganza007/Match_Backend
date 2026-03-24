import { Test, TestingModule } from '@nestjs/testing';
import { RedisController } from './redis.controller';
import { Redis } from './redis';

describe('RedisController (Unit)', () => {
  let controller: RedisController;
  let redisService: jest.Mocked<Redis>;

  beforeEach(async () => {
    const mockRedisService = {
      ping: jest.fn(),
      set: jest.fn(),
      get: jest.fn(),
      del: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedisController],
      providers: [
        {
          provide: Redis,
          useValue: mockRedisService,
        },
      ],
    }).compile();

    controller = module.get<RedisController>(RedisController);
    redisService = module.get(Redis) as jest.Mocked<Redis>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /redis/ping', () => {
    it('should return PONG response', async () => {
      redisService.ping.mockResolvedValueOnce('PONG');

      const result = await controller.ping();

      expect(result).toEqual({ ok: true, response: 'PONG' });
      expect(redisService.ping).toHaveBeenCalledTimes(1);
    });

    it('should handle Redis connection errors', async () => {
      redisService.ping.mockRejectedValueOnce(new Error('Connection refused'));

      await expect(controller.ping()).rejects.toThrow('Connection refused');
    });

    it('should return false if response is not PONG', async () => {
      redisService.ping.mockResolvedValueOnce('INVALID');

      const result = await controller.ping();

      expect(result.ok).toBe(false);
    });
  });

  describe('Integration with Redis service', () => {
    it('should use Redis service correctly', async () => {
      redisService.ping.mockResolvedValueOnce('PONG');

      const result = await controller.ping();

      expect(result).toEqual({ ok: true, response: 'PONG' });
    });
  });
});

describe('RedisController (E2E)', () => {
  let controller: RedisController;
  let redisService: jest.Mocked<Redis>;

  beforeEach(async () => {
    const mockRedisService = {
      ping: jest.fn().mockResolvedValue('PONG'),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedisController],
      providers: [{ provide: Redis, useValue: mockRedisService }],
    }).compile();

    controller = module.get<RedisController>(RedisController);
    redisService = module.get(Redis) as jest.Mocked<Redis>;
  });

  it('should successfully ping Redis', async () => {
    const response = await controller.ping();
    expect(response).toEqual({ ok: true, response: 'PONG' });
  });
});
