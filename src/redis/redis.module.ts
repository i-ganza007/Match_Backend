import { Module } from '@nestjs/common';
import RedisClient from 'ioredis';
import { RedisController } from './redis.controller';
import { REDIS_CLIENT } from './redis.constants';
import { Redis } from './redis';

@Module({
  imports: [],
  controllers: [RedisController],
  providers: [
    {
      provide: REDIS_CLIENT,
      useFactory: () => {
        const redisUrl = process.env.REDIS_URL;

        if (redisUrl) {
          return new RedisClient(redisUrl);
        }

        return new RedisClient({
          host: process.env.REDIS_HOST ?? '127.0.0.1',
          port: Number(process.env.REDIS_PORT ?? 6379),
          password: process.env.REDIS_PASSWORD || undefined,
          db: Number(process.env.REDIS_DB ?? 0),
        });
      },
    },
    Redis,
  ],
  exports: [REDIS_CLIENT, Redis],
})
export class RedisModule {}
