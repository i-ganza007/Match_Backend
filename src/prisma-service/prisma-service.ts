import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
    private prisma: PrismaClient;
    private pool: Pool;

    constructor(private config: ConfigService) {
        // Get database URL from multiple sources  
        const databaseUrl = config.get<string>('DATABASE_URL') || 
                           process.env.DATABASE_URL;
    

        
        if (!databaseUrl || typeof databaseUrl !== 'string') {
            throw new Error('DATABASE_URL must be a valid string');
        }

        // Create PostgreSQL connection pool
        this.pool = new Pool({ connectionString: databaseUrl });
        
        // Create Prisma adapter for PostgreSQL
        const adapter = new PrismaPg(this.pool);
        
        // Create PrismaClient with the adapter
        // Cast to plain PrismaClient to preserve default delegate types (Prisma v7 generic inference)
        this.prisma = new PrismaClient({ 
            adapter,
            log: ['query', 'info', 'warn', 'error']
        }) as unknown as PrismaClient;
    }

    async onModuleInit() {
        await this.prisma.$connect();
    }

    async onModuleDestroy() {
        await this.prisma.$disconnect();
        await this.pool.end();
    }

    get users() {
        return this.prisma.user;
    }

    get animals() {
        return this.prisma.animal;
    }

    get breeding() {
        return this.prisma.breeding;
    }

    get breeding_rec() {
        return this.prisma.breeding_Rec;
    }

    get relatedness_estimates() {
        return this.prisma.relatedNess_Estimates;
    }

    get performance_records() {
        return this.prisma.perfomance_Records;
    }

    get client() {
        return this.prisma;
    }

    $executeRaw(query: TemplateStringsArray, ...values: any[]) {
        return this.prisma.$executeRaw(query, ...values);
    }

    $queryRaw<T = unknown>(query: TemplateStringsArray, ...values: any[]): Promise<T> {
        return this.prisma.$queryRaw<T>(query, ...values);
    }
}