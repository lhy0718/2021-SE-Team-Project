import { forwardRef, Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm'
import { USERTOKEN_EXPIRE_IN } from 'src/shared/constants/constants'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import { User } from '../user/user.entity'
import { UserService } from '../user/user.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    forwardRef(() => User),
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      // secret: dotenv.parse(fs.readFileSync(`.${process.env.NODE_ENV}.env`))[
      //   'JWT_SECRET_KEY'
      // ],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy],
  exports: [
    AuthService,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule,
  ],
})
export class AuthModule {}
