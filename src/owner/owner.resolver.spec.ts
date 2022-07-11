import { Test, TestingModule } from '@nestjs/testing';
import { OwnerResolver } from './owner.resolver';
import { OwnerService } from './owner.service';

describe('OwnerResolver', () => {
  let resolver: OwnerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OwnerResolver, OwnerService],
    }).compile();

    resolver = module.get<OwnerResolver>(OwnerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
