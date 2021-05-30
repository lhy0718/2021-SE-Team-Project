import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { AbstractDto } from 'src/shared/abstract.dto'
import { Lecture } from '../lecture.entity'

export class LectureDto extends AbstractDto {
  @ApiProperty({
    example: '슬기로운 생활',
  })
  lectureName: string

  @ApiProperty({
    example: 2,
  })
  grade: number

  @ApiProperty({
    example: 1,
  })
  classNumber: number

  @ApiProperty({
    example: '3456',
  })
  lectureCode: string

  constructor(lec: Lecture) {
    super(lec)
    this.lectureName = lec.lectureName
    this.grade = lec.grade
    this.classNumber = lec.classNumber
    this.lectureCode = lec.lectureCode
  }
}
