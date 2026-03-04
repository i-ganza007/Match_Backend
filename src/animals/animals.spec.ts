import { Test, TestingModule } from '@nestjs/testing';
import { Animals } from './animals';

describe('Animals', () => {
  let provider: Animals;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Animals],
    }).compile();

    provider = module.get<Animals>(Animals);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
