import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserService } from '../user/user.service'
import { AuthService } from './auth.service'
import { LoginPayloadDto } from './dto/login-payload.dto'
import { LoginDto } from './dto/login.dto'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  @ApiOkResponse({
    type: LoginPayloadDto,
    description: 'User info with access token',
  })
  @ApiOperation({})
  async login(@Body() loginDto: LoginDto) {
    const userEntity = await this.authService.validateUser(loginDto)

    const token = await this.authService.createToken(userEntity)
    return new LoginPayloadDto(userEntity.toDto(), token)
  }
}
