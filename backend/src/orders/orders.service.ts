import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: any) {
    return await this.prisma.order.create({
      data: {
        ...data,
      },
    });
  }
}
