import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { BreedingEventsModule } from './breeding_events/breeding_events.module';
import { BreedingRecModule } from './breeding_rec/breeding_rec.module';
import { PrismaServiceModule } from './prisma-service/prisma-service.module';
import { JwtserviceModule } from './jwtservice/jwtservice.module';

@Module({
  imports: [UsersModule, AnimalsModule, BreedingEventsModule, BreedingRecModule, PrismaServiceModule, JwtserviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
