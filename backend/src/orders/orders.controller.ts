import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './dto';
import { Public } from 'src/common/decorators';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Public()
  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  createOrder(@Body() dto: OrderDto) {
    return this.ordersService.createOrder(dto);
  }

  @Public()
  @Get('/')
  @HttpCode(HttpStatus.OK)
  getAllOrder(): Promise<any> {
    return this.ordersService.getAllOrders();
  }

  @Public()
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  getOrderById(@Param('id') id: string): Promise<any> {
    return this.ordersService.getOrderById(id);
  }
}
