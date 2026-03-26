import { Module } from '@nestjs/common';
import { RecommendationsController } from './recommendations.controller';
import { RecommendationsService } from './recommendations.service';
import { RedisModule } from 'src/redis/redis.module';

@Module({
    controllers: [RecommendationsController],
    providers:   [RecommendationsService],
    imports:     [RedisModule],
})
export class RecommendationsModule {}
