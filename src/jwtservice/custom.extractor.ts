import { Request } from 'express';

export const cookieExtractor = (request: Request): string | null => {
    const token = request?.cookies?.['user_token'];
    return token || null;
};