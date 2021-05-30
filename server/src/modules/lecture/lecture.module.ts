import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../user/user.entity'
import { LectureTime } from './lecture-time.entity'
import { LectureController } from './lecture.controller'
import { Lecture } from './lecture.entity'
import { LectureService } from './lecture.service'

@Module({
  imports: [TypeOrmModule.forFeature([User, Lecture, LectureTime])],
  controllers: [LectureController],
  providers: [LectureService],
  exports: [LectureService],
})
export class LectureModule {}
