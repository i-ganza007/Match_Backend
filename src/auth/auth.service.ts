import { Injectable, NotFoundException, ConflictException, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import {UserCreationDTO,UserLoginDTO} from '../lib/user.dto'
import { ConfigService } from "@nestjs/config";
import * as argon2 from 'argon2';
import { PrismaService } from "src/prisma-service/prisma-service";
import { JwtService } from "@nestjs/jwt";
import { Redis } from "src/redis/redis";
@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private configService: ConfigService,
        private prismaService: PrismaService,
        private jwtService: JwtService,
        private redis: Redis,
    ) {}

    async signUp(body:UserCreationDTO){
        const present = await this.prismaService.users.findFirst({where:{
            OR: [
                { email: body.email },
                { phone_number: body.phone_number }
            ]
        }})
        if(present){
            throw new ConflictException("User already exists with that email or phone number")
        }
        const hashed_password = await argon2.hash(body.password)
        const createdUser = await this.userService.createUser({...body,password:hashed_password})
        return await this.logIn({userId:createdUser?.userId,email:createdUser?.email})
    }

    async logIn(body: Partial<UserLoginDTO>){
            const payload = { userId: body.userId, email: body.email };
            let signature = await this.jwtService.signAsync(payload)
            return { access_token: signature, user_Id: payload?.userId }
        }

        
    

    async validateUser(body:{email:string,password:string}){
        const present = await this.prismaService.users.findFirst({where:{
             email: body.email
        }})
        if(!present){
            throw new NotFoundException("User not found")
        }
        
        const isValidPassword = await argon2.verify(present.password, body.password);
        if (!isValidPassword) {
            throw new UnauthorizedException('Invalid credentials')
        }
        return present
    }

    async loggedInUser(user: { userId: string; email: string }) {
        const cacheKey = `user:profile:${user.userId}`;
        const cached = await this.redis.get(cacheKey);
        if (cached) return JSON.parse(cached);

        const found = await this.prismaService.users.findUnique({ where: { userId: user.userId } });
        if (found) {
            // Exclude password and location (PostGIS — not JSON-serializable) before caching
            const { password, location, ...safe } = found as any;
            await this.redis.set(cacheKey, JSON.stringify(safe), 30);
            return safe;
        }
        return found;
    }
}