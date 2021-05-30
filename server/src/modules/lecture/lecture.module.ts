import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Attendance } from '../attendance/attendance.entity'
import { User } from '../user/user.entity'
import { LectureTime } from './lecture-time.entity'
import { LectureController } from './lecture.controller'
import { Lecture } from './lecture.entity'
import { LectureService } from './lecture.service'

@Module({
  imports: [TypeOrmModule.forFeature([User, Lecture, LectureTime, Attendance])],
  controllers: [LectureController],
  providers: [LectureService],
  exports: [LectureService],
})
export class LectureModule {}
