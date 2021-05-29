import { ApiProperty } from '@nestjs/swagger'
import { IsEmail } from 'class-validator'

export class EmailVerificationParams {
  @ApiProperty()
  @IsEmail()
  readonly email: string
}
