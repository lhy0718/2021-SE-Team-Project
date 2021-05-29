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
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { EmailVerificationParams } from './dto/email-verification.params'
import { UserService } from './user.service'

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/email-verification/:email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: '인증 이메일 위한 이메일 입력',
    description:
      '유효한 이메일인지, 중복이 없는지, 검증된 주소인지 검증한 뒤 6자리 코드 전송',
  })
  async validateEmail(@Param() params: EmailVerificationParams): Promise<any> {
    const { email } = params
    if (!/@cau.ac.kr\s*$/.test(email)) {
      throw new HttpException('FORBIDDEN_DOMAIN', HttpStatus.FORBIDDEN)
    }

    const isDuplicated = await this.userService.checkDuplicate(email)

    if (isDuplicated) {
      throw new HttpException('DUPLICATED_EMAIL', HttpStatus.CONFLICT)
    }

    await this.userService.sendVerificationCode(email)
  }

  @Get('/email-validation')
  @ApiOperation({
    summary: '이메일 인증번호',
    description: '이메일과 6자리 코드를 둘다 쿼리로 보내면 됨',
  })
  @ApiQuery({ name: 'email', type: 'string' })
  @ApiQuery({ name: 'code', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'true: 코드 일치, false: 코드 불일치',
  })
  @ApiResponse({ status: 404, description: 'code or email not found' })
  @ApiResponse({ status: 403, description: 'expired' })
  async verifyEmail(
    @Query('email') email: string,
    @Query('code') code: string,
  ) {
    return await this.userService.verifyEmail(email, code)
  }
}
