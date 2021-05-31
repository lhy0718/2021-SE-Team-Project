import { ApiProperty } from '@nestjs/swagger'
import { Lecture } from 'src/modules/lecture/lecture.entity'
import { User } from 'src/modules/user/user.entity'
import { AbstractDto } from 'src/shared/abstract.dto'
import { Attendance } from '../attendance.entity'
import { Attend } from 'src/shared/constants/constants'

export class AttendanceDto extends AbstractDto {
  @ApiProperty({})//({})원래이거임
  user: User

  @ApiProperty()
  lecture: Lecture
/*
  @ApiProperty({
    example: '2021-05-01',
  })
  date: string
*/
  @ApiProperty({
    example: 3,
  })
  nth: number

  @ApiProperty({//출결여부
    example: 'ABSENT',
  })
  role: Attend

  constructor(a: Attendance) {
    super(a)

    this.user = a.user
    this.lecture = a.lecture
    this.role = a.role
    this.nth = a.nth
  }
}
