import { Body, Controller, Delete, Get, Param, Post, Put,Req ,UseGuards} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import {UsersService} from './users.service'
import type {Request,Response} from 'express'
import {UserCreationDTO} from '../lib/user.dto'
import { AuthGuard } from '@nestjs/passport';
@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ 
        summary: 'Retrieve all users',
        description: 'Fetches a list of all registered users in the system'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Successfully retrieved all users',
        type: [UserCreationDTO]
    })
    @ApiResponse({ 
        status: 500, 
        description: 'Internal server error' 
    })
    async getAllUsers(@Req() req:Request){
        console.log(req?.user)
        return await this.userService.getAllUsers()
    }

    @Get(":id")
    @ApiOperation({ 
        summary: 'Retrieve a specific user',
        description: 'Fetches detailed information about a user by their unique identifier'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'Unique identifier of the user',
        example: '12345'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Successfully retrieved user data',
        type: UserCreationDTO
    })
    @ApiResponse({ 
        status: 404, 
        description: 'User not found' 
    })
    @ApiResponse({ 
        status: 500, 
        description: 'Internal server error' 
    })
    async getSingleUser(@Param("id")id:string){
        return await this.userService.getSingleUser(id)
    }

    @Post()
    @ApiOperation({ 
        summary: 'Create a new user',
        description: 'Registers a new user with their personal and location information'
    })
    @ApiBody({ 
        type: UserCreationDTO,
        description: 'User registration data including personal details and location'
    })
    @ApiResponse({ 
        status: 201, 
        description: 'User successfully created',
        type: UserCreationDTO
    })
    @ApiResponse({ 
        status: 400, 
        description: 'Invalid input data or validation error' 
    })
    @ApiResponse({ 
        status: 409, 
        description: 'User with this email already exists' 
    })
    @ApiResponse({ 
        status: 500, 
        description: 'Internal server error' 
    })
    async createUser(@Body() body:UserCreationDTO){
        return await this.userService.createUser(body)
    }

    @Put(":id")
    @ApiOperation({ 
        summary: 'Update user information',
        description: 'Updates an existing user\'s personal and location information'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'Unique identifier of the user to update',
        example: '12345'
    })
    @ApiBody({ 
        type: UserCreationDTO,
        description: 'Updated user information'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'User successfully updated',
        type: UserCreationDTO
    })
    @ApiResponse({ 
        status: 400, 
        description: 'Invalid input data or validation error' 
    })
    @ApiResponse({ 
        status: 404, 
        description: 'User not found' 
    })
    @ApiResponse({ 
        status: 500, 
        description: 'Internal server error' 
    })
    async updateUser(@Param("id")id:string,@Body() body:UserCreationDTO){
        return await this.userService.updateUser(id,body)
    }

    @Delete(":id")
    @ApiOperation({ 
        summary: 'Delete a user',
        description: 'Permanently removes a user from the system'
    })
    @ApiParam({ 
        name: 'id', 
        description: 'Unique identifier of the user to delete',
        example: '12345'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'User successfully deleted' 
    })
    @ApiResponse({ 
        status: 404, 
        description: 'User not found' 
    })
    @ApiResponse({ 
        status: 500, 
        description: 'Internal server error' 
    })
    async deleteUser(@Param("id")id:string){
        return await this.userService.deleteUser(id)
    }
}
