import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient {
    private prisma
    constructor(private config:ConfigService){
        super()

        const pool = new Pool({
            connectionString:this.config.get('DATABASE_URL')
        })

        const adapter = new PrismaPg(pool)
        this.prisma = new PrismaClient({adapter})
    }

    async onModuleInit(){
        await this.$connect()
    }

    async onModuleDestroy(){
        await this.$disconnect()
    }

    get users(){
        return this.prisma.User
    }

    get animals (){
        return this.prisma.Animal
    }

    get breeding(){
        return this.prisma.Breeding
    }

    get breeding_rec(){
        return this.prisma.Breeding_Rec
    }

    get relatedness_estimates(){
        return this.prisma.Relatedness_Estimates
    }

    get performance_records(){
        return this.prisma.Performance_Records
    }
}
