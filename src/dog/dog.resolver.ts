import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateDogInput, UpdateDogInput } from 'src/types/graphql';
import { DogService } from './dog.service';

@Resolver('Dog')
export class DogResolver {
  constructor(private readonly dogService: DogService) {}

  @Mutation('createDog')
  create(@Args('createDogInput') createDogInput: CreateDogInput) {
    return this.dogService.create(createDogInput);
  }

  @Query('dogs')
  findAll() {
    return this.dogService.findAll();
  }

  @Query('dog')
  findOne(@Args('id') id: number) {
    return this.dogService.findOne(id);
  }

  @Mutation('updateDog')
  update(@Args('updateDogInput') updateDogInput: UpdateDogInput) {
    return this.dogService.update(updateDogInput.id, updateDogInput);
  }

  @Mutation('removeDog')
  remove(@Args('id') id: number) {
    return this.dogService.remove(id);
  }
}
