import {
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
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
import { compare } from 'bcryptjs'

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
    // const user = await this.userService.findOneByEmail(userLoginDto.email)
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email: userLoginDto.email })
      .addSelect('user.password')
      .getOneOrFail()
    // const isPasswordValid = await compare(userLoginDto.password, user.password)
    const isPasswordValid = await UtilsService.validateHash(
      userLoginDto.password,
      user && user.password,
    )
    if (!user || !isPasswordValid) {
      throw new UnauthorizedException()
    }
    return user
  }
}
