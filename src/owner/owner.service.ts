import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOwnerInput } from 'src/types/graphql';

@Injectable()
export class OwnerService {
  constructor(private prisma: PrismaService) {}

  create({ name }: CreateOwnerInput) {
    return this.prisma.owner.create({
      data: { name },
      include: { dogs: true },
    });
  }

  findOne(id: number) {
    return this.prisma.owner.findUnique({
      where: { id },
      include: { dogs: true },
    });
  }

  remove(id: number) {
    return this.prisma.owner.delete({
      where: { id },
      include: { dogs: true },
    });
  }
}
