import { BadRequestException, Body, Controller, Get, Param, ParseFloatPipe, ParseIntPipe, Patch, Query, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';
import { JwtGuard } from 'src/jwtservice/authGuard/jwtGuard.guard';
import { RecommendationsService } from './recommendations.service';

@ApiTags('Recommendations')
@UseGuards(JwtGuard)
@Controller('recommendations')
export class RecommendationsController {
    constructor(private recService: RecommendationsService) {}

    /**
     * GET /recommendations/quick-matches?latitude=<lat>&longitude=<lon>&radius=<5|10|15>
     *
     * Grabs all the authenticated user's eligible animals, finds nearby
     * candidates from other farms within the radius, runs the ML scorer,
     * and returns results grouped by the user's animal with each matched
     * owner's location (lat/lng) ready to plot on a Leaflet map.
     */
    @Get('quick-matches')
    @ApiOperation({
        summary: 'Find quick nearby matches for all your animals',
        description: 'Scores nearby animals against every eligible animal in your herd and returns owner coordinates for map display.',
    })
    @ApiQuery({ name: 'latitude',  type: Number, description: 'Your current latitude',  example: -1.9441 })
    @ApiQuery({ name: 'longitude', type: Number, description: 'Your current longitude', example: 30.0619 })
    @ApiQuery({ name: 'radius',    type: Number, description: 'Search radius in km',    enum: [5, 10, 15] })
    @ApiResponse({
        status: 200,
        description: 'Array grouped by your animal, each with a list of nearby scored matches and owner map coordinates',
    })
    getQuickMatches(
        @Req()                                     req:       Request,
        @Query('latitude',  ParseFloatPipe)        latitude:  number,
        @Query('longitude', ParseFloatPipe)        longitude: number,
        @Query('radius',    ParseIntPipe)          radius:    number,
    ): Promise<unknown[]> {
        const userId = (req as any).user?.userId;
        return this.recService.getQuickMatches(userId, latitude, longitude, radius);
    }

    /**
     * GET /recommendations?animalId=<uuid>
     *
     * Returns up to 10 ranked breeding recommendations for the given animal.
     * Serves a cached result if one exists that is < 7 days old; otherwise
     * runs the ML scorer and writes fresh records to Breeding_Rec.
     */
    @Get()
    getRecommendations(@Query('animalId') animalId: string) {
        if (!animalId) throw new BadRequestException('animalId query param is required');
        return this.recService.getRecommendations(animalId);
    }

    /**
     * PATCH /recommendations/:breedingRecId/accept
     *
     * Farmer accepts a recommendation. Runs a DB transaction that:
     *  1. Marks the rec as accepted (user_accepted=true, acceptedAt=now)
     *  2. Creates a Breeding record to track the real outcome / userRating
     *  3. Locks all pending recs for the same animal pair
     *  4. Marks both animals as recommendable=false while the breeding is active
     */
    @Patch(':breedingRecId/accept')
    acceptRecommendation(@Param('breedingRecId') breedingRecId: string) {
        return this.recService.acceptRecommendation(breedingRecId);
    }

    /**
     * PATCH /recommendations/:breedingRecId
     *
     * Farmer submits free-text feedback on a recommendation.
     * Body: { userFeedback: string }
     */
    @Patch(':breedingRecId')
    updateRecommendation(
        @Param('breedingRecId') breedingRecId: string,
        @Body() body: { userFeedback?: string },
    ) {
        return this.recService.updateRecommendation(breedingRecId, body);
    }
}
