import { Injectable, NotFoundException, ConflictException, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import {UserCreationDTO,UserLoginDTO} from '../lib/user.dto'
import { ConfigService } from "@nestjs/config";
import * as argon2 from 'argon2';
import { PrismaService } from "src/prisma-service/prisma-service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private userService:UsersService,private configService:ConfigService,private prismaService:PrismaService,private jwtService:JwtService){}

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
        const unhashed = body?.password
        console.log(unhashed)
        const pass_hash = this.configService.get('PASSWORD_HASH')
        const hashed_password = await argon2.hash(unhashed,{secret: pass_hash ? Buffer.from(pass_hash) : undefined})
        console.log(hashed_password)
        return this.userService.createUser({...body,password:hashed_password})
    }

    async logIn(body: UserLoginDTO){
        const present = await this.prismaService.users.findFirst({where:{
             email: body.email 
        }})
        if(present){
            // Verify password
            const pass_hash = this.configService.get('PASSWORD_HASH')
            const isValidPassword = await argon2.verify(
                present.password, 
                body.password, 
                { secret: pass_hash ? Buffer.from(pass_hash) : undefined }
            );
            
            if (!isValidPassword) {
                throw new UnauthorizedException('Invalid credentials')
            }
            
            const payload = { userId: present.userId, email: present.email };
            let signature = await this.jwtService.signAsync(payload)
            return { access_token: signature, user: present }
        }
        else{
            throw new NotFoundException("User not found")
        }
        
    }
}