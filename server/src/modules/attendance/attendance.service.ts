import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../user/user.entity'
import { Repository } from 'typeorm'
import { Attendance } from './attendance.entity'
import { AttendanceDto } from './dto/attendance.dto'
import { CreateAttendanceDto } from './dto/create-attendance.dto'
import { Lecture } from '../lecture/lecture.entity'

@Injectable()
export class AttendanceService {
  private readonly logger = new Logger(AttendanceService.name)
  constructor(
    @InjectRepository(Attendance)
    private readonly attendRepository: Repository<Attendance>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Lecture)
    private readonly lectureRepository: Repository<Lecture>,
  ) {}

  async create({
    userId,
    lectureId,
    nth,
    check,
  }: CreateAttendanceDto): Promise<Attendance> {
    try {
      const user = await this.userRepository.findOneOrFail({
        where: {
          id: userId,
        },
      })

      const lecture = await this.lectureRepository.findOneOrFail({
        where: {
          id: lectureId,
        },
      })
      const created = await this.attendRepository.save({
        user,
        lecture,
        nth,
        check,
      })

      return created
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }
}
