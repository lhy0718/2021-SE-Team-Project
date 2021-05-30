import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Request } from 'express'
import { RolesGuard } from 'src/shared/guard/roles.guard'
import { PaginationQuery } from 'src/shared/pagination.query'
import { User } from '../user/user.entity'
import { CreateLectureDto } from './dto/create-lecture.dto'
import { LectureService } from './lecture.service'

@Controller('lectures')
@ApiTags('lecture')
export class LectureController {
  constructor(private lectureService: LectureService) {}

  @Get()
  @ApiOperation({
    summary: '열려있는 수업 리스트 조회',
    description: '수강신청을 할 때 필요한 리스트',
  })
  async getLectures(@Req() req: Request, @Query() queries: PaginationQuery) {
    const lectures = await this.lectureService.getRecentLectures(queries)
    return lectures.map((x) => x.toDto())
  }

  @Get('/users/:userId')
  @ApiOperation({
    summary: '[선생님 전용] 학생/선생의 수업 리스트 조회',
  })
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getUserLectures(
    @Req() req: Request,
    @Query() query: PaginationQuery,
    @Param() { userId }: { userId: number },
  ) {
    const user = req.user as User
    const lectures = await this.lectureService.getLecturesByUserId(
      userId,
      query,
    )
    return lectures.map((x) => x.toDto())
  }

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiOperation({
    summary: '[선생님 ONLY] Lecture 생성',
  })
  async createLecture(
    @Req() req: Request,
    @Body() createLectureDto: CreateLectureDto,
  ) {
    const user = req.user as User

    return (await this.lectureService.create(user, createLectureDto)).toDto()
  }
}
