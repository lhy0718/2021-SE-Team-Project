import { UtilsService } from 'src/providers/utils.service'
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { AbstractDto } from './abstract.dto'

// PK 와 create, update 자동생성을 해주며 dto 와 매칭 해줌
export abstract class AbstractEntity<T extends AbstractDto = AbstractDto> {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn({
    type: 'timestamp without time zone',
    name: 'created_at',
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'timestamp without time zone',
    name: 'updated_at',
  })
  updatedAt: Date

  abstract dtoClass: new (entity: AbstractEntity, options?: any) => T

  toDto(options?: any): T {
    return UtilsService.toDto(this.dtoClass, this, options)
  }
}
