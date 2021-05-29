import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../user/user.entity'
import { LectureTime } from './dto/lecture-time.entity'
import { Lecture } from './lecture.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, Lecture, LectureTime])],
})
export class LectureModule {}
