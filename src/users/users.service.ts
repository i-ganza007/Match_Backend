import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-service/prisma-service';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UsersService {
    constructor(private configService:ConfigService,prismaService:PrismaService){}

    async getAllUsers(){}
    async getSingleUser(){}
    async createUser(){}
    async updateUser(){}
    async deleteUser(){}
}
