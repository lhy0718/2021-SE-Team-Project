import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../user/user.entity'
import { Repository } from 'typeorm'
import { Attendance } from './attendance.entity'
import { AttendanceDto } from './dto/attendance.dto'

@Injectable()
export class AttendanceService {
    private readonly logger = new Logger(AttendanceService.name)
    constructor(
        @InjectRepository(Attendance) private readonly attendRepository: Repository<Attendance>,
      ) {}

      async create(attendancdDto: AttendanceDto): Promise<Attendance> {
        try {
          
          const created = await this.attendRepository.save({
            user: attendancdDto.user,
            lecture: attendancdDto.lecture,
            nth: attendancdDto.nth,
            role:attendancdDto.role,

          })
    
          return created
        } catch (e) {
          this.logger.error(e)
          throw e
        }
      }
    

}
