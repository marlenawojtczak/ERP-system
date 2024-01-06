import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './dto';
import { Public } from 'src/common/decorators';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Public()
  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  createOrder(@Body() dto: OrderDto): Promise<any> {
    return this.ordersService.createOrder(dto);
  }
}
