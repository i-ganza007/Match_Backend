import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { AppGateway } from './messages';
import { RedisModule } from 'src/redis/redis.module';
import { JwtModule, JwtService } from '@nestjs/jwt';


@Module({
  controllers: [MessagesController],
  providers: [AppGateway],
  imports:[RedisModule,JwtModule]
})
export class MessagesModule {}
