import { ApiProperty } from '@nestjs/swagger'
import { IsInt } from 'class-validator'

export class UserIdParam {
  @ApiProperty({
    example: 1,
    type: Number,
  })
  readonly userId: number
}
