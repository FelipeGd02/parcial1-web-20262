import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import {ScreeningEntity} from '../../screenings/entities/screening.entity';


@Entity('rooms')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ type: 'int', default: 1 })
  capacity!: number;

  @OneToMany(() => ScreeningEntity, (screening) => screening.room)
  screening!: ScreeningEntity[];

}