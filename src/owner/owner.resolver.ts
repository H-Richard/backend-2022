import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateOwnerInput } from 'src/types/graphql';
import { OwnerService } from './owner.service';

@Resolver('Owner')
export class OwnerResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Mutation('createOwner')
  create(@Args('createOwnerInput') createOwnerInput: CreateOwnerInput) {
    return this.ownerService.create(createOwnerInput);
  }

  @Query('owner')
  findOne(@Args('id') id: number) {
    return this.ownerService.findOne(id);
  }

  @Mutation('removeOwner')
  remove(@Args('id') id: number) {
    return this.ownerService.remove(id);
  }
}
