import { Request } from 'express';

export const cookieExtractor = (request: Request): string | null => {
    // Cookie-based auth (web browsers)
    const cookieToken = request?.cookies?.['user_token'];
    if (cookieToken) return cookieToken;

    // Bearer token auth (mobile apps)
    const authHeader = request?.headers?.authorization;
    if (authHeader?.startsWith('Bearer ')) return authHeader.slice(7);

    return null;
};