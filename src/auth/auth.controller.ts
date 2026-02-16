import { Body, Controller,Res,Req, Post,UseFilters,UseGuards } from "@nestjs/common";
import {UserCreationDTO,UserLoginDTO} from '../lib/user.dto'
import {CustomHttpExceptionFilter} from '../customErrors/intServer.error'
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import type {Request,Response} from 'express'
@Controller("auth")
export class AuthController {
    constructor(private authService:AuthService){}

    @UseGuards(AuthGuard('local'))
    @UseFilters( CustomHttpExceptionFilter)
    @Post("login")
    async login(@Body() body:UserLoginDTO,@Req() req:Request,@Res({passthrough:true}) res:Response ){
        const userId = req?.user!.userId
        const email = req?.user!.email!
        let result = await this.authService.logIn({userId,email})
        console.log('Login result:', result)
        if(result){
            // Set only the token string in the cookie, not the whole object
            res.cookie('user_token', result.access_token)
            return {
                message: "Successful SignIn",
            }
        }
    }

    @UseFilters(CustomHttpExceptionFilter)
    @Post('signup')
    async signup(@Body() body:UserCreationDTO){
        return await this.authService.signUp(body)
    }
}