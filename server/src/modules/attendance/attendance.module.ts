import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Lecture } from '../lecture/lecture.entity'
import { User } from '../user/user.entity'
import { Attendance } from './attendance.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Attendance, User, Lecture])],
  controllers: [],
  providers: [],
  exports: [],
})
export class AttendanceModule {}
