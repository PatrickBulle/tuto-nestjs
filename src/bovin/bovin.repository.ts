import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BovinEntity } from 'src/entity/bovin.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class BovinRepository {
  constructor(
    @InjectRepository(BovinEntity)
    private readonly bovinRepo: Repository<BovinEntity>,
    private readonly entityManager: EntityManager,
  ) {}

  async findAll(): Promise<Bovin[]> {
    const bovins = await this.bovinRepo.find();

    return bovins;
  }

  async findById(p_copaip: string, p_nunati: string): Promise<Bovin | null> {
    const bovin = await this.bovinRepo.findOne({
      where: { copaip: p_copaip, nunati: p_nunati },
    });
    return bovin;
  }
}
