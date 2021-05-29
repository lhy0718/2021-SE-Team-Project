import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AwsService } from '../aws/aws.service'
import { EmailVerification } from './email-verification.entity'
import { UserController } from './user.controller'
import { User } from './user.entity'
import { UserService } from './user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User, EmailVerification])],
  controllers: [UserController],
  providers: [UserService, AwsService],
  exports: [UserService],
})
export class UserModule {}
