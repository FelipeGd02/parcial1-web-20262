import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScreeningEntity } from './entities/screening.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ScreeningsService {
    constructor (
        @InjectRepository (ScreeningEntity)
        private readonly screeningsRepository: Repository<ScreeningEntity>,
    ){}
    async create (data:)
}
