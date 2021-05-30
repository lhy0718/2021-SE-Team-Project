import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  IsInt,
  IsString,
  Length,
  Max,
  Min,
  ValidateNested,
} from 'class-validator'
import { AttendanceDto } from 'src/modules/attendance/dto/attendance.dto'
import { AbstractDto } from 'src/shared/abstract.dto'
import { Weekday } from 'src/shared/constants/constants'
import { LectureTime } from '../lecture-time.entity'
import { Lecture } from '../lecture.entity'
import { LectureTimeDto } from './lecture-time.dto'

export class LectureDto extends AbstractDto {
  @ApiProperty({
    example: '슬기로운 생활',
  })
  @IsString()
  lectureName: string

  @ApiProperty({
    example: 2,
  })
  @IsInt()
  @Min(1)
  @Max(12)
  grade: number

  @ApiProperty({
    example: 1,
  })
  @IsInt()
  @Min(1)
  @Max(50)
  classNumber: number

  @ApiProperty({
    example: '3456',
  })
  @IsString()
  @Length(1, 4)
  lectureCode: string

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => LectureTimeDto)
  lectureTime: LectureTimeDto[]

  @Type(() => AttendanceDto)
  attendances: AttendanceDto[]

  constructor(lec: Lecture) {
    super(lec)
    this.lectureName = lec.lectureName
    this.grade = lec.grade
    this.classNumber = lec.classNumber
    this.lectureCode = lec.lectureCode
    this.lectureTime = lec.lectureTime as any as LectureTimeDto[]
    this.attendances = lec.attendances as any as AttendanceDto[]
  }
}
