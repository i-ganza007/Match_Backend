import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseFloatPipe, ParseIntPipe, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';
import {UsersService} from './users.service'
import type {Request} from 'express'
import {UserCreationDTO} from '../lib/user.dto'
import { AuthGuard } from '@nestjs/passport';
@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Get('nearby')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({
        summary: 'Find nearby farmers',
        description: 'Returns farmers within the specified radius from the provided coordinates, along with the animal types in their herds'
    })
    @ApiQuery({ name: 'latitude', type: Number, description: 'Your current latitude', example: -1.9441 })
    @ApiQuery({ name: 'longitude', type: Number, description: 'Your current longitude', example: 30.0619 })
    @ApiQuery({ name: 'radius', type: Number, description: 'Search radius in km (5, 10, or 15)', enum: [5, 10, 15] })
    @ApiResponse({
        status: 200,
        description: 'List of nearby farmers sorted by distance, each with their herd animal types',
    })
    @ApiResponse({ status: 400, description: 'Invalid radius or missing coordinates' })
    async getNearbyMatches(
        @Req() req: Request,
        @Query('latitude', ParseFloatPipe) latitude: number,
        @Query('longitude', ParseFloatPipe) longitude: number,
        @Query('radius', ParseIntPipe) radius: number,
    ) {
        const userId = (req as any).user?.userId;
        return await this.userService.getNearbyMatches(userId, latitude, longitude, radius);
    }

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
    async getAllUsers(
        @Query('limit', new DefaultValuePipe(50), ParseIntPipe) limit: number,
        @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    ) {
        return await this.userService.getAllUsers(limit, offset);
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

    
    @Delete("wipeout")
    async wipeOut(){
        return await this.userService.wipeout()
    }
}
