import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from './entities/room.entity';
import { Repository } from 'typeorm/browser';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {
    constructor (
        @InjectRepository (RoomEntity)
        private readonly roomsRepository: Repository <RoomEntity>,
    ){}
    async create (data: CreateRoomDto): Promise <RoomEntity> {
        const room = this.roomsRepository.create(data);
        return this.roomsRepository.save (room);
    }
    async findAll
}
