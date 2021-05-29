import { AbstractEntity } from 'src/shared/abstract.entity'
import { UserRole } from 'src/shared/constants/constants'
import { Entity, Column, ManyToOne, OneToMany, OneToOne } from 'typeorm'
import { LectureDto } from './dto/lecture.dto'

@Entity()
export class Lecture extends AbstractEntity<LectureDto> {
  @Column()
  lectureName: string

  @Column()
  grade: number

  @Column()
  classNumber: number

  @Column()
  lectureCode: string

  dtoClass = LectureDto
}
