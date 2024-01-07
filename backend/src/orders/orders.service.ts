import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderDto } from './dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: any): Promise<OrderDto> {
    return await this.prisma.order.create({
      data: {
        ...data,
      },
    });
  }
}
