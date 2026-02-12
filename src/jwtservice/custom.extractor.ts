import { Request } from 'express';

export const cookieExtractor = (request: Request): string => {
    return request?.cookies?.['user_token'] ;
};