import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';
import { Animals } from './animals';
import { Animals as AnimalDTO } from '../lib/animal.dto';
import { JwtGuard } from 'src/jwtservice/authGuard/jwtGuard.guard';
import { CookieUser } from 'src/lib/cookieDecorator';

@UseGuards(JwtGuard)
@Controller('animals')
export class AnimalsController {
    constructor(private animalService: Animals) {}

    @Get()
    async getAllAnimals() {
        return await this.animalService.getAllAnimals();
    }

    @Get(':id')
    async getSingleAnimal(@Param('id') id: string) {
        return await this.animalService.getSingleAnimal(id);
    }

    @Post()
    @UseInterceptors(FileInterceptor('photo', { storage: memoryStorage() }))
    async createAnimal(
        @Body() body: AnimalDTO,
        @CookieUser() user: { userId: string; email: string },
        @UploadedFile() file?: Express.Multer.File,
    ) {
        return await this.animalService.createAnimal(body, user.userId, file);
    }

    @Patch(':id')
    async updateAnimal(@Param('id') id: string, @Body() body: Partial<AnimalDTO>) {
        return await this.animalService.updateAnimals(id, body);
    }

    @Delete(':id')
    async deleteAnimal(@Param('id') id: string) {
        return await this.animalService.deleteAnimal(id);
    }

    @Patch(':id/photo')
    @UseInterceptors(FileInterceptor('photo', { storage: memoryStorage() }))
    @ApiConsumes('multipart/form-data')
    @ApiBody({ schema: { type: 'object', properties: { photo: { type: 'string', format: 'binary' } }, required: ['photo'] } })
    async uploadPhoto(
        @Param('id') id: string,
        @UploadedFile() file: Express.Multer.File,
    ) {
        if (!file) throw new BadRequestException('No photo file provided — send it as multipart/form-data with field name "photo"');
        return await this.animalService.uploadProfilePhoto(id, file);
    }

    @Get()
    async getAllAnimalsOfUser(@CookieUser() user: { userId: string; email: string }){
        return this.animalService.getAnimalsOfCertainUser(user)
    }
}
