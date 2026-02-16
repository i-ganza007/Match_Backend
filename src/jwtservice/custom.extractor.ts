import { Request } from 'express';

export const cookieExtractor = (request: Request): string | null => {
    const token = request?.cookies?.['user_token'];
    console.log('Cookie extractor - All cookies:', request?.cookies);
    console.log('Cookie extractor - Extracted token:', token);
    return token || null;
};