import { Body, Controller,Res,Req, Post,UseFilters,UseGuards } from "@nestjs/common";
import {UserCreationDTO,UserLoginDTO} from '../lib/user.dto'
import {CustomHttpExceptionFilter} from '../lib/customErrors/intServer.error'
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
        let result = await this.authService.logIn(body)
        console.log(req?.user)
        if(result){
            res.cookie('user_token',result)
            return "Successful SignIn"
        }
    }

    @UseFilters(CustomHttpExceptionFilter)
    @Post('signup')
    async signup(@Body() body:UserCreationDTO){
        return await this.authService.signUp(body)
    }
}