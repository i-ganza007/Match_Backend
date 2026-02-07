import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { BreedingEventsModule } from './breeding_events/breeding_events.module';
import { PrismaServiceModule } from './prisma-service/prisma-service.module';
import { JwtserviceModule } from './jwtservice/jwtservice.module';
import {ConfigModule} from '@nestjs/config'
import path from 'node:path';

@Module({
  imports: [UsersModule, AnimalsModule, BreedingEventsModule, PrismaServiceModule, JwtserviceModule,ConfigModule.forRoot({isGlobal:true,envFilePath:path.join(__dirname,'..','.env')})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
