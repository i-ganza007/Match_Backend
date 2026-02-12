import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {UsersService} from './users.service'
import {Request,Response} from 'express'
@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Get("")
    async getAllUsers(){}

    @Get()
    async getSingleUser(){}

    @Post()
    async createUser(){}

    @Put()
    async updateUser(){}

    @Delete()
    async deleteUser(){}
}
