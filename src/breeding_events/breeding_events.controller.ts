import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';
import { JwtGuard } from 'src/jwtservice/authGuard/jwtGuard.guard';
import { BreedingEventsService } from './breeding_events.service';

@ApiTags('Breedings')
@UseGuards(JwtGuard)
@Controller('breedings')
export class BreedingEventsController {
    constructor(private breedingService: BreedingEventsService) {}

    @Get()
    @ApiOperation({
        summary: 'Get my active breedings',
        description: 'Returns all active breeding records where the authenticated user owns either the male or female animal. Each record includes fully joined maleAnimal and femaleAnimal objects.',
    })
    @ApiResponse({
        status: 200,
        description: 'List of active breedings with nested animal details',
    })
    getMyBreedings(@Req() req: Request) {
        const userId = (req as any).user?.userId;
        return this.breedingService.getMyBreedings(userId);
    }
}
