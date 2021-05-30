import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AwsService } from '../aws/aws.service'
import { Lecture } from '../lecture/lecture.entity'
import { EmailVerification } from './email-verification.entity'
import { UserController } from './user.controller'
import { User } from './user.entity'
import { UserService } from './user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User, EmailVerification, Lecture])],
  controllers: [UserController],
  providers: [UserService, AwsService],
  exports: [UserService],
})
export class UserModule {}
