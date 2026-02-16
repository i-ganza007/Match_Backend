import { Global, Module } from '@nestjs/common';
import { Jwtservice } from './jwtservice';
import { JwtGuard } from './authGuard/jwtGuard.guard';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
@Global()
@Module({
  imports:[PassportModule,NestJwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: process.env.JWT_SECRET || configService.get<string>('JWT_SECRET') ,
            }),
            inject: [ConfigService],
        })],
  providers: [Jwtservice,JwtGuard],
  exports:[Jwtservice]
})
export class JwtserviceModule {}
