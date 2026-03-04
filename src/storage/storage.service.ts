import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';

const BUCKET = 'Animal_Images';

@Injectable()
export class StorageService {
    private supabase: SupabaseClient;

    constructor(private config: ConfigService) {
        const url = this.config.get<string>('SUPABASE_URL');
        const key = this.config.get<string>('SERVICE_ROLE');

        if (!url || !key) {
            throw new Error('SUPABASE_URL and SERVICE_ROLE must be set in .env');
        }

        this.supabase = createClient(url, key);
    }

    async uploadAnimalPhoto(file: Express.Multer.File): Promise<string> {
        const ext = file.originalname.split('.').pop();
        const filename = `${randomUUID()}.${ext}`;
        const path = filename;

        const { error } = await this.supabase.storage
            .from(BUCKET)
            .upload(path, file.buffer, {
                contentType: file.mimetype,
                upsert: false,
            });

        if (error) {
            throw new InternalServerErrorException(`Image upload failed: ${error.message}`);
        }

        const { data } = this.supabase.storage.from(BUCKET).getPublicUrl(path);
        return data.publicUrl;
    }
}
