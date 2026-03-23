import { Test, TestingModule } from '@nestjs/testing';
import { Jwtservice } from './jwtservice';
import { ConfigService } from '@nestjs/config';

describe('Jwtservice', () => {
  let provider: Jwtservice;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Jwtservice,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('test-jwt-secret'),
          },
        },
      ],
    }).compile();

    provider = module.get<Jwtservice>(Jwtservice);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
