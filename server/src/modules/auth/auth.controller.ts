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
  USERTOKEN_EXPIRE_IN,
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

  setUserTokenToCookie(res: Response, token: string) {
    res.cookie(USERTOKEN_COOKIE_NAME, token, {
      signed: true,
      maxAge: USERTOKEN_EXPIRE_IN,
      httpOnly: true,
    })
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({})
  async login(
    @Body() loginDto: LoginDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const validatedUser = await this.authService.validateUser(loginDto)

    const token = await this.authService.createToken(validatedUser)
    this.setUserTokenToCookie(res, token.accessToken)
    return res.json(validatedUser.toDto())
  }

  @Post('/logout')
  async logout(@Res() res: Response) {
    res.clearCookie(USERTOKEN_COOKIE_NAME)
    res.clearCookie(OAUTHINFO_TOKEN_COOKIE_NAME)

    return res.status(201).send()
  }

  @Post('/sign-up')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({})
  async signUp(
    @Body() createUserDto: CreateUserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const createdUser = await this.userService.create(createUserDto)
    console.log('<<Created User>> : ', createdUser)
    const token = await this.authService.createToken(createdUser)
    this.setUserTokenToCookie(res, token.accessToken)
    return res.json(createdUser.toDto())
  }

  @Delete()
  @ApiOperation({
    summary: '탈퇴',
  })
  @UseGuards(AuthGuard('jwt'))
  async unregister(@Req() req: Request, @Res() res: Response) {
    const user = req.user as User

    await this.userService.unregister({ user })

    res.clearCookie(USERTOKEN_COOKIE_NAME)
    res.clearCookie(OAUTHINFO_TOKEN_COOKIE_NAME)

    return res.status(200).send()
  }

  @Get('me')
  @ApiOperation({
    summary: '내 정보를 불러옴',
    description: '현재 로그인 되어 있는 유저의 정보를 불러옴',
  })
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: UserDto, description: 'current user info' })
  async getCurrentUser(@Req() req: Request) {
    console.log('ME', req.user)
    const user = req.user as User
    const result = await this.userService.findOneByUserId(+user.id)
    console.log('SHIT')
    return result.toDto()
  }
}
