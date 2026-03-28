import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { AppGateway } from './messages';
import { RedisModule } from 'src/redis/redis.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [MessagesController],
  providers:   [AppGateway, MessagesService],
  imports:     [RedisModule, JwtModule],
})
export class MessagesModule {}
