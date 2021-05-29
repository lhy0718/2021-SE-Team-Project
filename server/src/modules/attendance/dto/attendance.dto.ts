import { ApiProperty } from '@nestjs/swagger'
import { Lecture } from 'src/modules/lecture/lecture.entity'
import { User } from 'src/modules/user/user.entity'
import { AbstractDto } from 'src/shared/abstract.dto'
import { Attendance } from '../attendance.entity'

export class AttendanceDto extends AbstractDto {
  @ApiProperty({})
  user: User

  @ApiProperty()
  lecture: Lecture

  @ApiProperty({
    example: '2021-05-01',
  })
  date: string

  @ApiProperty({
    example: 3,
  })
  nth: number

  constructor(a: Attendance) {
    super(a)

    this.user = a.user
    this.lecture = a.lecture
    this.date = a.date
    this.nth = a.nth
  }
}
