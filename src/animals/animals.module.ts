import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { Animals } from './animals';

@Module({
  controllers: [AnimalsController],
  providers: [Animals]
})
export class AnimalsModule {}
