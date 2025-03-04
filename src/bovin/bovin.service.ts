import { Injectable } from '@nestjs/common';
import { BovinRepository } from './bovin.repository';
import { Bovin } from 'src/models/bovin.model';

@Injectable()
export class BovinService {
  constructor(private readonly bovinRepository: BovinRepository) {}

  getBovins(): Promise<Bovin[]> {
    return this.bovinRepository.findAll();
  }

  getBovin(copaip: string, nunati: string): Promise<Bovin | null> {
    return this.bovinRepository.findById(copaip, nunati);
  }
}
