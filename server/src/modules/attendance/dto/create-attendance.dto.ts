import { ApiProperty } from '@nestjs/swagger'
import { Attend } from 'src/shared/constants/constants'

export class CreateAttendanceDto {
  @ApiProperty({
    example: 2,
  })
  readonly userId: number

  @ApiProperty({
    example: 1,
  })
  readonly lectureId: number

  @ApiProperty({
    example: 1,
  })
  readonly nth: number

  @ApiProperty({
    example: 'ABSENT',
  })
  readonly check: Attend
}
