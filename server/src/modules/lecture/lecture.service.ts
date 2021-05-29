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
import { Lecture } from './lecture.entity'

@Injectable()
export class LectureService {
  private readonly logger = new Logger(LectureService.name)

  constructor(
    @InjectRepository(Lecture)
    private readonly lectureRepo: Repository<Lecture>,
  ) {}

  // TODO: Work in progress
  async getLecturesByUserId(
    id: number,
    query: PaginationQuery,
  ): Promise<Lecture[]> {
    return this.lectureRepo.find({
      where: {
        id,
      },
    })
  }
}
