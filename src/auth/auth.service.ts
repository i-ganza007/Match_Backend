import { Injectable, NotFoundException, ConflictException, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import {UserCreationDTO,UserLoginDTO} from '../lib/user.dto'
import { ConfigService } from "@nestjs/config";
import * as argon2 from 'argon2';
import { PrismaService } from "src/prisma-service/prisma-service";
import { JwtService } from "@nestjs/jwt";
import {Request} from 'express'
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

    async  loggedInUser(user:{userId:string,email:string}){
        return await this.prismaService.users.findUnique({where:{userId:user.userId}})
    }
}