import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import type RedisClient from 'ioredis';
import { REDIS_CLIENT } from './redis.constants';

@Injectable()
export class Redis implements OnModuleDestroy {
	constructor(@Inject(REDIS_CLIENT) private readonly client: RedisClient) {}

	async ping(): Promise<string> {
		return this.client.ping();
	}

	async set(key: string, value: string, ttlSeconds?: number): Promise<void> {
		if (ttlSeconds && ttlSeconds > 0) {
			await this.client.set(key, value, 'EX', ttlSeconds);
			return;
		}

		await this.client.set(key, value);
	}

	async get(key: string): Promise<string | null> {
		return this.client.get(key);
	}

	async del(key: string): Promise<number> {
		return this.client.del(key);
	}

	async onModuleDestroy(): Promise<void> {
		await this.client.quit();
	}
}