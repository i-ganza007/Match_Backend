import { Module } from '@nestjs/common';
import { BreedingEventsController } from './breeding_events.controller';
import { BreedingEventsService } from './breeding_events.service';

@Module({
    controllers: [BreedingEventsController],
    providers:   [BreedingEventsService],
})
export class BreedingEventsModule {}
