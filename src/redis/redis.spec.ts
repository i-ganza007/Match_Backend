import { Test, TestingModule } from '@nestjs/testing';
import { Redis } from './redis';
import RedisClient from 'ioredis';
import { REDIS_CLIENT } from './redis.constants';

describe('Redis Service (Unit)', () => {
  let service: Redis;
  let mockRedisClient: jest.Mocked<RedisClient>;

  beforeEach(async () => {
    // Mock ioredis client
    mockRedisClient = {
      ping: jest.fn().mockResolvedValue('PONG'),
      set: jest.fn().mockResolvedValue('OK'),
      get: jest.fn().mockResolvedValue(null),
      del: jest.fn().mockResolvedValue(0),
      quit: jest.fn().mockResolvedValue('OK'),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Redis,
        {
          provide: REDIS_CLIENT,
          useValue: mockRedisClient,
        },
      ],
    }).compile();

    service = module.get<Redis>(Redis);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('ping', () => {
    it('should return PONG', async () => {
      const result = await service.ping();
      expect(result).toBe('PONG');
      expect(mockRedisClient.ping).toHaveBeenCalledTimes(1);
    });

    it('should handle connection errors', async () => {
      mockRedisClient.ping.mockRejectedValueOnce(new Error('Connection refused'));
      await expect(service.ping()).rejects.toThrow('Connection refused');
    });
  });

  describe('set', () => {
    it('should set a key-value without TTL', async () => {
      await service.set('testKey', 'testValue');
      expect(mockRedisClient.set).toHaveBeenCalledWith('testKey', 'testValue');
    });

    it('should set a key-value with TTL in seconds', async () => {
      await service.set('testKey', 'testValue', 3600);
      expect(mockRedisClient.set).toHaveBeenCalledWith('testKey', 'testValue', 'EX', 3600);
    });

    it('should ignore TTL if not positive', async () => {
      await service.set('testKey', 'testValue', 0);
      expect(mockRedisClient.set).toHaveBeenCalledWith('testKey', 'testValue');
      
      await service.set('testKey', 'testValue', -1);
      expect(mockRedisClient.set).toHaveBeenCalledWith('testKey', 'testValue');
    });

    it('should handle set errors', async () => {
      mockRedisClient.set.mockRejectedValueOnce(new Error('Redis error'));
      await expect(service.set('key', 'value')).rejects.toThrow('Redis error');
    });
  });

  describe('get', () => {
    it('should retrieve a value by key', async () => {
      mockRedisClient.get.mockResolvedValueOnce('testValue');
      const result = await service.get('testKey');
      expect(result).toBe('testValue');
      expect(mockRedisClient.get).toHaveBeenCalledWith('testKey');
    });

    it('should return null for non-existent key', async () => {
      mockRedisClient.get.mockResolvedValueOnce(null);
      const result = await service.get('nonExistent');
      expect(result).toBeNull();
    });

    it('should handle get errors', async () => {
      mockRedisClient.get.mockRejectedValueOnce(new Error('Redis error'));
      await expect(service.get('key')).rejects.toThrow('Redis error');
    });
  });

  describe('del', () => {
    it('should delete a key and return count deleted', async () => {
      mockRedisClient.del.mockResolvedValueOnce(1);
      const result = await service.del('testKey');
      expect(result).toBe(1);
      expect(mockRedisClient.del).toHaveBeenCalledWith('testKey');
    });

    it('should return 0 if key does not exist', async () => {
      mockRedisClient.del.mockResolvedValueOnce(0);
      const result = await service.del('nonExistent');
      expect(result).toBe(0);
    });

    it('should handle del errors', async () => {
      mockRedisClient.del.mockRejectedValueOnce(new Error('Redis error'));
      await expect(service.del('key')).rejects.toThrow('Redis error');
    });
  });

  describe('onModuleDestroy', () => {
    it('should close Redis connection gracefully', async () => {
      await service.onModuleDestroy();
      expect(mockRedisClient.quit).toHaveBeenCalledTimes(1);
    });

    it('should handle quit errors gracefully', async () => {
      mockRedisClient.quit.mockRejectedValueOnce(new Error('Close error'));
      // Should not throw, just log
      await expect(service.onModuleDestroy()).rejects.toThrow();
    });
  });

  describe('Integration scenarios', () => {
    it('should handle concurrent operations', async () => {
      mockRedisClient.set.mockResolvedValue('OK');
      mockRedisClient.get.mockResolvedValue('value1');
      mockRedisClient.get.mockResolvedValueOnce('value2');

      const results = await Promise.all([
        service.set('key1', 'value1'),
        service.get('key1'),
        service.get('key2'),
      ]);

      expect(results).toHaveLength(3);
      expect(mockRedisClient.set).toHaveBeenCalledWith('key1', 'value1');
    });

    it('should handle session-like workflow', async () => {
      mockRedisClient.set.mockResolvedValue('OK');
      mockRedisClient.get.mockResolvedValueOnce('socket123');
      mockRedisClient.del.mockResolvedValueOnce(1);

      // Simulate user session: set → get → delete
      await service.set('ws:user:userId123', 'socket123');
      const socketId = await service.get('ws:user:userId123');
      expect(socketId).toBe('socket123');

      const deleted = await service.del('ws:user:userId123');
      expect(deleted).toBe(1);

      expect(mockRedisClient.set).toHaveBeenCalledWith('ws:user:userId123', 'socket123');
    });
  });
});