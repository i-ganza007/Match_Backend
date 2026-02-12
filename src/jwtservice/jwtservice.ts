import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {Strategy,ExtractJwt} from 'passport-jwt'
import { ConfigService } from '@nestjs/config';
import {cookieExtractor} from './custom.extractor'
@Injectable()
export class Jwtservice extends PassportStrategy(Strategy, 'jwt') {
    constructor(private configService:ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
            secretOrKey: configService.get('JWT_SECRET') || process.env.JWT_SECRET ,
            ignoreExpiration:false
        })
    }

    async validate(payload:any){
        return payload
    }
}
