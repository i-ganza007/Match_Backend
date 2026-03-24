import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsController } from './animals.controller';
import { Animals } from './animals';

describe('AnimalsController', () => {
  let controller: AnimalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalsController],
      providers: [
        {
          provide: Animals,
          useValue: {
            getAnimalsOfCertainUser: jest.fn(),
            getSingleAnimal: jest.fn(),
            createAnimal: jest.fn(),
            updateAnimals: jest.fn(),
            deleteAnimal: jest.fn(),
            uploadProfilePhoto: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AnimalsController>(AnimalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
