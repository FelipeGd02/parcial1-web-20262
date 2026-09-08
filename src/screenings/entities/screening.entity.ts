import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,} from 'typeorm';
import { RoomEntity } from '../../rooms/entities/room.entity';

@Entity('screenings')
export class ScreeningEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  movieTitle!: string;

  @Column({ })
  startsAt!: Date;

  @Column({ type: 'varchar', default: 'scheduled' })
  status!: 'scheduled' | 'cancelled';

  @ManyToOne(() => RoomEntity, (room) => room.screening, {nullable: false,})

  @JoinColumn({ name: 'room_id' })
  room!: RoomEntity;
}