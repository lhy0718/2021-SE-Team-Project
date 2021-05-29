import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Request } from 'express'
import { PaginationQuery } from 'src/shared/pagination.query'
import { User } from '../user/user.entity'
import { LectureService } from './lecture.service'

@Controller('lectures')
@ApiTags('lecture')
export class LectureController {
  constructor(private lectureService: LectureService) {}

  @Post('/users/:userId')
  @ApiOperation({
    summary: '학생/선생의 수업 리스트',
  })
  async getUserLectures(
    @Req() req: Request,
    @Query() query: PaginationQuery,
    @Param() { userId }: { userId: number },
  ) {
    const user = req.user as User
    this.lectureService.getLecturesByUserId(userId, query)
  }
}
