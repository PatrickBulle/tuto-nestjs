import { Injectable } from '@nestjs/common';
import { Bovin, Sexe } from 'src/entity/bovin.entity';

@Injectable()
export class BovinRepository {
  findAll(): Bovin[] {
    return BovinRepository.bovins;
  }

  findById(copaip: string, nunati: string): Bovin | undefined {
    return BovinRepository.bovins.find(
      (bovin: Bovin) =>
        bovin.getCopaip() === copaip && bovin.getNunati() === nunati,
    );
  }
}
