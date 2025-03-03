import { Injectable } from '@nestjs/common';
import { Bovin, Sexe } from 'src/entity/bovin.entity';
import { BovinRepository } from './bovin.repository';

@Injectable()
export class BovinService {
  constructor(private readonly bovinRepository: BovinRepository) {}

  getBovins(): Promise<Bovin[]> {
    return this.bovinRepository.findAll();
  }

  getBovin(copaip: string, nunati: string): Bovin | undefined {
    return this.bovinRepository.findById(copaip, nunati);
  }
}
