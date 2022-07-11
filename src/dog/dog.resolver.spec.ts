import { Test, TestingModule } from '@nestjs/testing';
import { DogResolver } from './dog.resolver';
import { DogService } from './dog.service';

describe('DogResolver', () => {
  let resolver: DogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogResolver, DogService],
    }).compile();

    resolver = module.get<DogResolver>(DogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
