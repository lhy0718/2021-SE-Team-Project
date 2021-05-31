import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Weekday } from 'src/shared/constants/constants'
import { PaginationQuery } from 'src/shared/pagination.query'
import { getManager, Repository } from 'typeorm'
import { User } from '../user/user.entity'
import { CreateLectureDto } from './dto/create-lecture.dto'
import { LectureTime } from './lecture-time.entity'
import { Lecture } from './lecture.entity'

@Injectable()
export class LectureService {
  private readonly logger = new Logger(LectureService.name)

  constructor(
    @InjectRepository(Lecture)
    private readonly lectureRepo: Repository<Lecture>,
    @InjectRepository(LectureTime)
    private readonly lectureTimeRepo: Repository<LectureTime>,
  ) {}

  async getLecturesByUserId(
    id: number,
    { page, pageSize }: PaginationQuery,
  ): Promise<Lecture[]> {
    try {
      const lectures = this.lectureRepo
        .createQueryBuilder('lecture')
        .leftJoin('lecture.user', 'user')
        .where('user.id = :id', { id })
        .skip(pageSize * (page - 1))
        .take(pageSize)
        .getMany()

      return lectures
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }

  async getRecentLectures({
    page,
    pageSize,
    order,
  }: PaginationQuery): Promise<Lecture[]> {
    try {
      const lectures = await this.lectureRepo
        .createQueryBuilder('lecture')
        .orderBy('lecture.createdAt', order)
        .skip(pageSize * (page - 1))
        .take(Math.min(pageSize, 50))
        .getMany()

      return lectures
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }

  async create(user: User, dto: CreateLectureDto) {
    try {
      const savedLectureTimes = await Promise.all(
        dto.lectureTime.map(async (x) => {
          console.log('[X]', x)
          return await this.lectureTimeRepo.save(x)
        }),
      )
      // console.log('[SAVED LECTURE TIMES]', savedLectureTimes)
      const created = await this.lectureRepo.save({
        users: [user],
        lectureName: dto.lectureName,
        grade: dto.grade,
        classNumber: dto.classNumber,
        lectureCode: dto.lectureCode,
        lectureTime: savedLectureTimes,
        attendances: [],
      })

      const lecture = await this.lectureRepo.findOneOrFail({
        relations: ['lectureTime', 'attendances'],
        where: {
          id: created.id,
        },
      })

      console.log('[CREATED LECTURE]', lecture)
      return lecture
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }

  async register(user: User, lectureId: number) {
    try {
      const lecture = await this.lectureRepo.findOneOrFail({
        where: {
          id: lectureId,
        },
      })
      lecture.users.push(user)
      const saved = await this.lectureRepo.save(lecture)
      console.log('SAVED LECTURE', saved)
      return saved
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }
}
