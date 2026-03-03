import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {UserCreationDTO} from '../lib/user.dto'
import * as argon2 from 'argon2';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma-service/prisma-service';
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
        // Models with Unsupported('geography') fields have 'create' omitted by Prisma Client.
        // Use $executeRaw with ST_GeomFromText to insert, then fetch the created record.
        const userId = randomUUID();
        await this.prismaService.$executeRaw`
            INSERT INTO "User" (
                "userId", "name", "sex", "password", "phone_number", "email",
                "lastActive", "district", "sector", "village", "cell", "location"
            ) VALUES (
                ${userId},
                ${body.name},
                ${body.sex}::"Gender",
                ${body.password},
                ${body.phone_number},
                ${body.email},
                ${body.lastActive},
                ${body.district},
                ${body.sector},
                ${body.village},
                ${body.cell},
                ST_GeomFromText(${'POINT(' + body.longitude + ' ' + body.latitude + ')'}, 4326)
            )
        `;
        return this.prismaService.users.findUnique({ where: { userId } });
    }

    async updateUser(id:string, body:Partial<UserCreationDTO>){
        const { latitude, longitude, ...rest } = body;
        const updateData: any = { ...rest };
        
        // Hash password if it's being updated
        if (body.password) {
            const pass_hash = this.configService.get('PASSWORD_HASH');
            updateData.password = await argon2.hash(body.password, {
                secret: pass_hash ? Buffer.from(pass_hash) : undefined
            });
        }

        // Update location via raw SQL if lat/lng provided (Unsupported type field)
        if (latitude !== undefined && longitude !== undefined) {
            const wkt = `POINT(${longitude} ${latitude})`;
            await this.prismaService.$executeRaw`
                UPDATE "User"
                SET "location" = ST_GeomFromText(${wkt}, 4326)
                WHERE "userId" = ${id}
            `;
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

    async wipeout(){
        return await this.prismaService.users.deleteMany({})
    }
}
