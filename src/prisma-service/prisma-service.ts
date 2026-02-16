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
        const databaseUrl = this.config.get<string>('DATABASE_URL') || 
                           process.env.DATABASE_URL || 
                           'postgresql://testuser:testpassword@localhost:5432/matchDB';
        
        console.log('Database URL:', databaseUrl);
        console.log('Database URL type:', typeof databaseUrl);
        
        if (!databaseUrl || typeof databaseUrl !== 'string') {
            console.error('Config SERVICE:', this.config.get('DATABASE_URL'));
            console.error('PROCESS ENV:', process.env.DATABASE_URL);
            throw new Error('DATABASE_URL must be a valid string');
        }

        // Create PostgreSQL connection pool
        this.pool = new Pool({ connectionString: databaseUrl });
        
        // Create Prisma adapter for PostgreSQL
        const adapter = new PrismaPg(this.pool);
        
        // Create PrismaClient with the adapter
        this.prisma = new PrismaClient({ 
            adapter,
            log: ['query', 'info', 'warn', 'error']
        });
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
}