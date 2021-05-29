import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator'
import { UserRole } from 'src/shared/constants/constants'

export class CreateUserDto {
  @ApiProperty({
    example: 'STUDENT',
  })
  @IsEnum(UserRole)
  readonly role: UserRole

  @ApiProperty({
    example: 'test@test.com',
  })
  @IsEmail()
  readonly email: string

  @ApiProperty({
    example: '1234qwer',
  })
  @IsString()
  @Length(1, 50)
  readonly password: string

  @ApiProperty({
    example: '김명호',
  })
  @IsString()
  readonly fullName: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(12)
  readonly grade: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  readonly classNumber: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsPhoneNumber('KR')
  readonly phone: string
}
