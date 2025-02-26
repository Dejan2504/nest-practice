import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KrajaEntity } from './kraja.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KrajaService {
  constructor(
    @InjectRepository(KrajaEntity)
    private krajaRepository: Repository<KrajaEntity>,
  ) {}

  async findAll(): Promise<KrajaEntity[]> {
    return this.krajaRepository.find();
  }

  async create(user: KrajaEntity): Promise<KrajaEntity> {
    return this.krajaRepository.save(user);
  }
}
