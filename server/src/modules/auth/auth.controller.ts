import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common'
import { Response, Request } from 'express'
import { AuthGuard } from '@nestjs/passport'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import {
  USERTOKEN_COOKIE_NAME,
  OAUTHINFO_TOKEN_COOKIE_NAME,
} from 'src/shared/constants/constants'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { UserDto } from '../user/dto/user.dto'
import { UserService } from '../user/user.service'
import { AuthService } from './auth.service'
import { LoginPayloadDto } from './dto/login-payload.dto'
import { LoginDto } from './dto/login.dto'
import { User } from '../user/user.entity'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  @ApiOkResponse({
    type: LoginPayloadDto,
    description: '로그인 완료',
  })
  @ApiOperation({})
  async login(@Body() loginDto: LoginDto) {
    const userEntity = await this.authService.validateUser(loginDto)

    const token = await this.authService.createToken(userEntity)
    return new LoginPayloadDto(userEntity.toDto(), token)
  }

  @Post('/logout')
  async logout(@Res() res: Response) {
    res.clearCookie(USERTOKEN_COOKIE_NAME)
    res.clearCookie(OAUTHINFO_TOKEN_COOKIE_NAME)

    return res.status(201).send()
  }

  @Post('/sign-up')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserDto, description: '가입 완료' })
  async signUp(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    const createdUser = await this.userService.create(createUserDto)
    return createdUser.toDto()
  }

  @Delete()
  @UseGuards(AuthGuard('jwt'))
  async unregister(@Req() req: Request, @Res() res: Response) {
    const user = req.user as User

    await this.userService.unregister({ user })

    res.clearCookie(USERTOKEN_COOKIE_NAME)
    res.clearCookie(OAUTHINFO_TOKEN_COOKIE_NAME)

    return res.status(200).send()
  }

  @Get('me')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: UserDto, description: 'current user info' })
  getCurrentUser(@Req() req: Request, @Res() res: Response) {
    const user = req.user as User
    return user.toDto()
  }
}
