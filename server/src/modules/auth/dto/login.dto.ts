import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class LoginDto {
  @ApiProperty({
    example: 'test@cau.ac.kr',
  })
  @IsNotEmpty()
  @IsString()
  readonly email: string

  @ApiProperty({
    example: '123123',
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string
}
