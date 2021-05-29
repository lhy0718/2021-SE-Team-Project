import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../user/user.entity'
import { Lecture } from './lecture.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, Lecture])],
})
export class LectureModule {}
