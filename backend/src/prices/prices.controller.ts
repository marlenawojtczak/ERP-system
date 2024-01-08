import {
  HttpStatus,
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { PricesService } from './prices.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PricesDto } from './dto';
import { Public } from '../common/decorators';

@ApiTags('Prices')
@Controller('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @Public()
  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The price has been successfully created.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Price already exists',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  create(@Body() dto: PricesDto) {
    return this.pricesService.createPrice(dto);
  }

  @Public()
  @Post('bulk')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The prices have been successfully created.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  createMany(@Body() dtos: PricesDto[]) {
    return this.pricesService.createManyPrices(dtos);
  }

  @Public()
  @Get()
  findAll() {
    return this.pricesService.findAll();
  }

  @Public()
  @Patch(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The price has been successfully updated.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Price not found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  update(@Param('id') id: string, @Body() dto: Partial<PricesDto>) {
    return this.pricesService.updatePrice(id, dto);
  }

  @Public()
  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The price has been successfully deleted.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Price not found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  delete(@Param('id') id: string) {
    return this.pricesService.deletePrice(id);
  }
}
