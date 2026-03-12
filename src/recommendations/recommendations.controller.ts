import { BadRequestException, Body, Controller, Get, Param, Patch, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/jwtservice/authGuard/jwtGuard.guard';
import { RecommendationsService } from './recommendations.service';

@UseGuards(JwtGuard)
@Controller('recommendations')
export class RecommendationsController {
    constructor(private recService: RecommendationsService) {}

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
