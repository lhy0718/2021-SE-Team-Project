import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNumber } from 'class-validator'

export class EnrollParam {
  @ApiProperty({
    example: 1,
    type: Number,
  })
  @IsInt()
  readonly lectureId: number
}
