import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { BreedingEventsModule } from './breeding_events/breeding_events.module';
import { PrismaServiceModule } from './prisma-service/prisma-service.module';
import { JwtserviceModule } from './jwtservice/jwtservice.module';
import {ConfigModule} from '@nestjs/config'
import {CustomMetricsMiddleware} from './middleware/grafana.middleware'
import { makeCounterProvider, PrometheusModule } from '@willsoto/nestjs-prometheus';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule, 
    AnimalsModule, 
    BreedingEventsModule, 
    PrismaServiceModule, 
    JwtserviceModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'  // Fixed: Look for .env in project root
    }),
    PrometheusModule.register({
      defaultMetrics: {
        enabled: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService,
    makeCounterProvider({
      name: 'count',
      help: 'metric_help',
      labelNames: ['method', 'origin'] as string[],
    }),

  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomMetricsMiddleware).forRoutes('*');
  }
}