import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Transform, Type } from 'class-transformer'
import { IsEnum, IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator'
import { Order } from './constants/constants'

export class PaginationQuery {
  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page: number = 1

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 50,
  })
  @Type(() => Number)
  @IsInt()
  @Min(10)
  @Max(50)
  @IsOptional()
  pageSize: number = 50

  @ApiPropertyOptional({
    default: Order.ASC,
  })
  @IsEnum(Order)
  @IsOptional()
  order: Order = Order.ASC
}
