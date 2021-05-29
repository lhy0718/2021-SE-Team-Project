import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { EmailVerificationParams } from './dto/email-verification.params'
import { UserService } from './user.service'

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/email-verification/:email')
  @HttpCode(HttpStatus.OK)
  async verifyEmail(@Param() params: EmailVerificationParams): Promise<any> {
    if (!/@cau.ac.kr\s*$/.test(params.email)) {
      throw new HttpException('FORBIDDEN_DOMAIN', HttpStatus.FORBIDDEN)
    }

    const isDuplicated = await this.userService.checkDuplicate(params.email)

    if (isDuplicated) {
      throw new HttpException('DUPLICATED_EMAIL', HttpStatus.CONFLICT)
    }
  }
}
