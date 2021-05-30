import { Weekday } from 'src/shared/constants/constants'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm'
import { Lecture } from '../lecture.entity'

@Entity()
export class LectureTime {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  weekday: Weekday

  @Column()
  period: number

  @ManyToOne(() => Lecture, (lec) => lec.lectureTime)
  lecture: Lecture
}
