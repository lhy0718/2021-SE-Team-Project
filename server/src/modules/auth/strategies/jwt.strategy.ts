import { Injectable, Logger } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Request } from 'express'
import { ConfigService } from 'src/shared/config/config.service'
import { USERTOKEN_COOKIE_NAME } from 'src/shared/constants/constants'
import { UserService } from 'src/modules/user/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  private readonly logger = new Logger(JwtStrategy.name)

  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      secretOrKey: configService.getJwtSecret(),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // jwtFromRequest: (req: Request) => {
      //   // Extract Jwt from cookie
      //   let token = null

      //   if (req && req.signedCookies) {
      //     token = req.signedCookies[USERTOKEN_COOKIE_NAME]
      //   }

      //   return token
      // },
    })
    // console.log('JWT SECRET', configService.getJwtSecret())
  }

  async validate(payload: any, done: (err: any, payload: any) => void) {
    try {
      const { id } = payload
      const user = await this.userService.findOneByUserId(id)

      this.logger.debug('usertoken validated: ' + JSON.stringify(user, null, 2))
      done(null, user)
    } catch (e) {
      done(e.message, false)
    }
  }
}
