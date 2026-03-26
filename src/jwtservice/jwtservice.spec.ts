import { Test, TestingModule } from '@nestjs/testing';
import { Jwtservice } from './jwtservice';

describe('Jwtservice', () => {
  let provider: Jwtservice;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Jwtservice],
    }).compile();

    provider = module.get<Jwtservice>(Jwtservice);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
