import { ApiProperty } from '@nestjs/swagger';

export class PricesDto {
  @ApiProperty({ example: 'koszulka standardowa' })
  type: string;

  @ApiProperty({ example: 'kolor' })
  version: string;

  @ApiProperty({ example: [26, 24, 22, 21, 17] })
  prices: number[];

  @ApiProperty({ example: false })
  xxxlAvailable: boolean;

  @ApiProperty({ example: false })
  childrenAvailable: boolean;
}
