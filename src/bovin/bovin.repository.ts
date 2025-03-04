import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bovin } from 'src/entity/bovin.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class BovinRepository {
  constructor(
    @InjectRepository(Bovin) private readonly bovinRepo: Repository<Bovin>,
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
