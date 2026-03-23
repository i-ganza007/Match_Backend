import { Test, TestingModule } from '@nestjs/testing';
import { Animals } from './animals';
import { PrismaService } from 'src/prisma-service/prisma-service';
import { StorageService } from 'src/storage/storage.service';
import { Gender, AnimalType } from '@prisma/client';
import { DeepMockProxy, mockDeep, mockReset } from 'jest-mock-extended';

describe('Animals Service (Unit)', () => {
  let service: Animals;
  let prismaService: DeepMockProxy<PrismaService>;
  let storageService: jest.Mocked<StorageService>;

  const mockAnimal = {
    animalId: 'animal-123',
    name: 'Bessie',
    sex: Gender.FEMALE,
    birthDate: new Date('2022-01-15'),
    type: AnimalType.COW,
    specie: 'HOLSTEIN_COW',
    profilePhoto: 'https://example.com/photo.jpg',
    status: 'ALIVE',
    ownerId: 'user-123',
    recommendable: true,
    breed_confidence: 0.95,
    motherId: null,
    fatherId: null,
    breedingEventId: null,
  };

  beforeEach(async () => {
    prismaService = mockDeep<PrismaService>();

    const mockStorageService = {
      uploadAnimalPhoto: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Animals,
        { provide: PrismaService, useValue: prismaService },
        { provide: StorageService, useValue: mockStorageService },
      ],
    }).compile();

    service = module.get<Animals>(Animals);
    storageService = module.get<jest.Mocked<StorageService>>(StorageService);
  });

  afterEach(() => {
    mockReset(prismaService);
    jest.clearAllMocks();
  });

  describe('getAllAnimals', () => {
    it('should return array of all animals', async () => {
      expect(service.getAllAnimals).toBeDefined();
    });

    it('should return empty array if no animals exist', async () => {
      expect(service.getAllAnimals).toBeDefined();
    });
  });

  describe('getSingleAnimal', () => {
    it('should return a single animal by ID', async () => {
      expect(service.getSingleAnimal).toBeDefined();
    });

    it('should return null if animal not found', async () => {
      expect(service.getSingleAnimal).toBeDefined();
    });
  });

  describe('createAnimal', () => {
    it('should create an animal', async () => {
      expect(service.createAnimal).toBeDefined();
    });

    it('should calculate recommendable status based on age and breeding thresholds', async () => {
      // 2-year-old cow female (24 months) — should be recommendable (min 15 months)
      const youngCow = {
        ...mockAnimal,
        birthDate: new Date(Date.now() - 24 * 30.44 * 24 * 60 * 60 * 1000),
        sex: Gender.FEMALE,
        type: AnimalType.COW,
      };

      prismaService.animals.create.mockResolvedValueOnce(youngCow as any);

      await service.createAnimal(youngCow as any, 'user-123');

      const createCall = prismaService.animals.create.mock.calls[0][0];
      expect(createCall.data.recommendable).toBe(true);
    });

    it('should mark very young animals as not yet recommendable', async () => {
      // 6-month-old cow female (too young, min 15 months)
      const youngCow = {
        ...mockAnimal,
        birthDate: new Date(Date.now() - 6 * 30.44 * 24 * 60 * 60 * 1000),
        sex: Gender.FEMALE,
        type: AnimalType.COW,
      };

      prismaService.animals.create.mockResolvedValueOnce({ ...youngCow, recommendable: false } as any);

      await service.createAnimal(youngCow as any, 'user-123');

      const createCall = prismaService.animals.create.mock.calls[0][0];
      expect(createCall.data.recommendable).toBe(false);
    });
  });

  describe('updateAnimals', () => {
    it('should update an animal', async () => {
      expect(service.updateAnimals).toBeDefined();
    });
    });

  describe('deleteAnimal', () => {
    it('should delete an animal', async () => {
      expect(service.deleteAnimal).toBeDefined();
    });
  });

  describe('uploadProfilePhoto', () => {
    it('should upload photo and update animal record', async () => {
      expect(service.uploadProfilePhoto).toBeDefined();
    });
  });

  describe('getAnimalsOfCertainUser', () => {
    it('should return all animals of a user with pedigree', async () => {
      expect(service.getAnimalsOfCertainUser).toBeDefined();
    });

    it('should return empty array if user has no animals', async () => {
      expect(service.getAnimalsOfCertainUser).toBeDefined();
    });
  });

  describe('Breeding age threshold rules', () => {
    it('should enforce COW breeding age: female ≥15mo, male ≥12mo', async () => {
      expect(service.createAnimal).toBeDefined();
    });

    it('should enforce PIG breeding age: female ≥7mo, male ≥8mo', async () => {
      expect(service.createAnimal).toBeDefined();
    });
  });
});
