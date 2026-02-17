import { Body, Controller,Res,Req, Post,UseFilters,UseGuards, Get } from "@nestjs/common";
import {UserCreationDTO,UserLoginDTO} from '../lib/user.dto'
import {CustomHttpExceptionFilter} from '../customErrors/intServer.error'
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import type {Request,Response} from 'express'
import {CookieUser} from '../lib/cookieDecorator'
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

    @UseGuards(AuthGuard('jwt'))
    @UseFilters(CustomHttpExceptionFilter)
    @Get("loggedIn")
    async loggedInUser(@CookieUser() user:{userId:string,email:string}) {
        return await this.authService.loggedInUser(user)
    }

    @Get("logOut")
    async logOut(@Res({passthrough:true}) res:Response){
        res.clearCookie('user_token')
        return {message:"Signed Out Successfully"}
    }
}