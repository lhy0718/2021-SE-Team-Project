import { 
    Controller,
    Post,
    HttpCode,
    HttpStatus,
    Body,
    Req,
    Res,Get
 } from '@nestjs/common';
 import { Attendance } from './attendance.entity'
import { ApiOkResponse,ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AttendanceService } from './attendance.service'
import { AttendanceDto } from './dto/attendance.dto'

@Controller('attendance')
@ApiTags('attendance')
export class AttendanceController {
    constructor(
        private attendService: AttendanceService,
      ) {}

    @Post('/attendcheck')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ 
        summary: '출석체크 진행' ,
        description:'교수가 학생의 출석체크를 진행한다 '
    })
    @ApiOkResponse({description: '출석체크 완료', type: Attendance})
    async attendcheck(@Body() attendanceDto: AttendanceDto) {
        const attendcheck = await this.attendService.create(attendanceDto)
        //return `This will return one movie with the id: ${AttendCheckDto}`;
        return attendcheck.toDto()
        }
}
