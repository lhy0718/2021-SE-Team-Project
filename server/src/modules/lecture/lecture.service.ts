import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PaginationQuery } from 'src/shared/pagination.query'
import { Repository } from 'typeorm'
import { User } from '../user/user.entity'
import { CreateLectureDto } from './dto/create-lecture.dto'
import { Lecture } from './lecture.entity'

@Injectable()
export class LectureService {
  private readonly logger = new Logger(LectureService.name)

  constructor(
    @InjectRepository(Lecture)
    private readonly lectureRepo: Repository<Lecture>,
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
      const created = await this.lectureRepo.save({
        users: [user],
        dto,
        attendances: [],
      })
      return created
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }
}
