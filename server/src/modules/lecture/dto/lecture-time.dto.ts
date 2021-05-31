import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNumber, Min } from 'class-validator'
import { Weekday } from 'src/shared/constants/constants'

export class LectureTimeDto {
  @ApiProperty({
    example: 'TUE',
  })
  @IsEnum(Weekday)
  weekday: Weekday

  @ApiProperty({
    example: 5,
  })
  @IsNumber()
  @Min(1)
  period: number
}
