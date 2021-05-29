import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { AbstractDto } from 'src/shared/abstract.dto'
import { UserRole } from 'src/shared/constants/constants'
import { User } from '../user.entity'

export class UserDto extends AbstractDto {
  @ApiProperty({
    example: 'STUDENT',
  })
  role: UserRole

  @ApiPropertyOptional({
    example: 'test@test.com',
  })
  email: string

  @ApiProperty({
    example: '김학생',
  })
  fullName: string

  @ApiPropertyOptional({
    example: '5',
  })
  grade: number

  @ApiPropertyOptional({
    example: '12',
  })
  classNumber: number

  @ApiPropertyOptional({
    example: '01058529586',
  })
  phone: string

  constructor(user: User) {
    super(user)
    this.role = user.role
    this.email = user.email
    this.fullName = user.fullName
    this.grade = user.grade
    this.classNumber = user.classNumber
    this.phone = user.phone
  }
}
