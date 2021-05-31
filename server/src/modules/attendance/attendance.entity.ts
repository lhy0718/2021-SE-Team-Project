import { AbstractEntity } from 'src/shared/abstract.entity'
import { Column, Entity, ManyToOne } from 'typeorm'
import { Lecture } from '../lecture/lecture.entity'
import { User } from '../user/user.entity'
import { AttendanceDto } from './dto/attendance.dto'
import { Attend } from 'src/shared/constants/constants'
@Entity()
export class Attendance extends AbstractEntity<AttendanceDto> {
  @ManyToOne(() => User, (user) => user.attendances)
  user: User

  @ManyToOne(() => Lecture, (lecture) => lecture.attendances)
  lecture: Lecture
/*
  // 날짜만 저장하고 시간은 저장하지 않는다.
  @Column({ type: 'date' })
  date: string
*/
  // 몇 번 째 수업인지
  @Column()
  nth: number

  @Column()
  role: Attend  

  dtoClass = AttendanceDto
}
