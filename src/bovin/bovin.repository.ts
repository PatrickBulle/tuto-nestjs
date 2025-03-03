import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bovin, Sexe } from 'src/entity/bovin.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class BovinRepository {
  constructor(
    @InjectRepository(Bovin) private readonly bovinRepo: Repository<Bovin>,
    private readonly entityManager: EntityManager,
  ) {}

  findAll(): Promise<Bovin[]> {
    return this.bovinRepo.find();
  }

  findById(copaip: string, nunati: string): Bovin | undefined {
    return undefined;
  }
}
