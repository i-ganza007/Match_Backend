import { Controller, Get } from '@nestjs/common';
import { Redis } from './redis';

@Controller('redis')
export class RedisController {
	constructor(private readonly redis: Redis) {}

	@Get('ping')
	async ping() {
		const response = await this.redis.ping();
		return { ok: response === 'PONG', response };
	}
}
