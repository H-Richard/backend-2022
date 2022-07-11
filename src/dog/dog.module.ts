import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogResolver } from './dog.resolver';

@Module({
  providers: [DogResolver, DogService]
})
export class DogModule {}
