import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-service/prisma-service';
import { ConfigService } from '@nestjs/config';
import {UserCreationDTO} from '../lib/user.dto'
import * as argon2 from 'argon2';
@Injectable()
export class UsersService {
    constructor(private configService:ConfigService,private prismaService:PrismaService){}

    async getAllUsers(){
        return await this.prismaService.users.findMany()
    }
    async getSingleUser(id:string){
        return await this.prismaService.users.findUnique({
            where:{
                userId:id
            }
        })
    }
    async createUser(body:UserCreationDTO){
        return await this.prismaService.users.create({data:{
            name:body.name,
            sex:body.sex,
            password:body.password,
            phone_number:body.phone_number,
            email:body.email,
            lastActive:body.lastActive,
            farmingSystem:body.farmingSystem,
            district:body.district,
            sector:body.sector,
            village:body.village,
            cell:body.cell,
            latitude:body.latitude,
            longitude:body.longitude
        }})
    }

    async updateUser(id:string, body:Partial<UserCreationDTO>){
        const updateData = { ...body };
        
        // Hash password if it's being updated
        if (body.password) {
            const pass_hash = this.configService.get('PASSWORD_HASH');
            updateData.password = await argon2.hash(body.password, {
                secret: pass_hash ? Buffer.from(pass_hash) : undefined
            });
        }
        
        return await this.prismaService.users.update({
            where: { userId: id },
            data: updateData
        });
    }
    async deleteUser(id:string){
        return await this.prismaService.users.delete({where:{
                userId:id
            }})
    }
}
