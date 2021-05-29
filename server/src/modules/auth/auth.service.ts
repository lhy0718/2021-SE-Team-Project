import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { UtilsService } from 'src/providers/utils.service'
import { ConfigService } from 'src/shared/config/config.service'
import { USERTOKEN_EXPIRE_IN } from 'src/shared/constants/constants'
import { Repository } from 'typeorm'
import { UserDto } from '../user/dto/user.dto'
import { User } from '../user/user.entity'
import { UserService } from '../user/user.service'
import { LoginDto } from './dto/login.dto'
import { TokenPayloadDto } from './dto/token-payload.dto'

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name)

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createToken(user: User | UserDto): Promise<TokenPayloadDto> {
    return new TokenPayloadDto({
      expiresIn: USERTOKEN_EXPIRE_IN,
      accessToken: await this.jwtService.signAsync({ id: user.id }),
    })
  }

  async validateUser(userLoginDto: LoginDto): Promise<User> {
    const user = await this.userService.findOneByEmail(userLoginDto.email)
    const isPasswordValid = await UtilsService.validateHash(
      userLoginDto.password,
      user && user.password,
    )
    if (!user || !isPasswordValid) {
      throw new NotFoundException()
    }
    return user
  }
}
