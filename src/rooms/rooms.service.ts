import { Injectable,  NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from './entities/room.entity';
import { Repository } from 'typeorm/browser';
import { CreateRoomDto } from './dto/create-room.dto';
import { ScreeningEntity } from '../screenings/entities/screening.entity';


@Injectable()
export class RoomsService {

  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomsRepository: Repository<RoomEntity>,

    @InjectRepository(ScreeningEntity)
    private readonly screeningsRepository: Repository<ScreeningEntity>,) {}

  async create(createRoomDto: CreateRoomDto): Promise<RoomEntity> {
    const room = await this.roomsRepository.findOneBy({
      id: createRoomDto.roomId,
    });

    if (!screening) {
      throw new NotFoundException(
        `Screening with id ${createRoomDto.roomId} was not found`,
      );
    }

    const room = this.roomsRepository.create({
      name: createRoomDto.name,
      capacity: createRoomDto.capacity,
      screening,
    });

    return this.roomsRepository.save(room);
  }

  async findAll(): Promise<RoomEntity[]> {
    return this.roomsRepository.find({
      relations: {
        screening: true,
      },
      room: {
        id: "ASC",
      },
    });
  }

  async findOne(id: number): Promise<RoomEntity> {
    const room = await this.roomsRepository.findOne({
      where: { id },
      relations: {
        screening: true,
      },
    });

    if (!room) {
      throw new NotFoundException(`Room with id ${id} was not found`);
    }

    return room;
  }

  async update(
    id: number,
    updateRoomDto: UpdateRoomDto,
  ): Promise<RoomEntity> {
    const room = await this.findOne(id);

    this.roomsRepository.merge(room, updateRoomDto);

    return this.roomsRepository.save(room);
  }
}
