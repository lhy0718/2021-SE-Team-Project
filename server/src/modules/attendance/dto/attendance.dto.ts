import { ApiProperty } from '@nestjs/swagger'
import { Lecture } from 'src/modules/lecture/lecture.entity'
import { User } from 'src/modules/user/user.entity'
import { AbstractDto } from 'src/shared/abstract.dto'
import { Attendance } from '../attendance.entity'
import { Attend } from 'src/shared/constants/constants'
import { Type } from 'class-transformer'
import { UserDto } from 'src/modules/user/dto/user.dto'
import { LectureDto } from 'src/modules/lecture/dto/lecture.dto'

export class AttendanceDto extends AbstractDto {
  @ApiProperty({
    example: 1,
  })
  nth: number

  @ApiProperty({
    example: 'ABSENT',
  })
  check: Attend

  @Type(() => UserDto)
  @ApiProperty()
  user: User

  @Type(() => LectureDto)
  @ApiProperty()
  lecture: Lecture

  constructor(a: Attendance) {
    super(a)

    this.check = a.check
    this.nth = a.nth
    this.user = a.user
    this.lecture = a.lecture
  }
}
