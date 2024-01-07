import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PricesDto } from './dto';

@Injectable()
export class PricesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.price.findMany();
  }

  async createPrice(dto: PricesDto) {
    return await this.prisma.price.create({
      data: {
        type: dto.type,
        version: dto.version,
        prices: dto.prices,
        xxxlAvailable: dto.xxxlAvailable,
        childrenAvailable: dto.childrenAvailable,
      },
    });
  }

  async createManyPrices(dtos: PricesDto[]) {
    return await this.prisma.price.createMany({
      data: dtos,
    });
  }

  async updatePrice(id: string, dto: Partial<PricesDto>) {
    return this.prisma.price.update({
      where: { id },
      data: dto,
    });
  }

  async deletePrice(id: string) {
    return await this.prisma.price.delete({
      where: { id },
    });
  }
}
