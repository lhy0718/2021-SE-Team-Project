import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, Length, Max, Min } from 'class-validator'
import { Weekday } from 'src/shared/constants/constants'
import { LectureTimeDto } from './lecture-time.dto'

export class CreateLectureDto {
  @ApiProperty({
    example: '기술 가정',
  })
  readonly lectureName: string

  @ApiProperty({
    example: 3,
  })
  @IsInt()
  @Min(1)
  @Max(12)
  grade: number

  @ApiProperty({
    example: 2,
  })
  @IsInt()
  @Min(1)
  @Max(50)
  classNumber: number

  @ApiProperty({
    example: '1234',
  })
  @IsString()
  @Length(1, 4)
  lectureCode: string

  @ApiProperty({
    example: [
      {
        weekDay: Weekday.FRI,
        period: 4,
      },
    ],
  })
  lectureTime: LectureTimeDto
}
