import { Module } from "@nestjs/common";
import { UsersModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import {LocalStrategy} from './localStrategy/local.strategy'
@Module({
    providers:[AuthService,LocalStrategy],
    controllers:[AuthController],
    exports:[LocalStrategy],
    imports:[
        UsersModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: { expiresIn: '2 days' },
            }),
        })
    ]
})
export class AuthModule {}