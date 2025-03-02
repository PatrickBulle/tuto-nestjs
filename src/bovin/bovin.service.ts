import { Injectable } from '@nestjs/common';
import { Bovin, Sexe } from 'src/entity/bovin';

@Injectable()
export class BovinService {
  // Liste de bovins créée en dur
  private static readonly bovins: Bovin[] = [
    new Bovin(
      'FR',
      '2512345678',
      'Marguerite',
      new Date('2019-01-01'),
      Sexe.F,
      new Date('2019-01-02'),
      new Date('2019-01-02T12:34:56'),
    ),
    new Bovin(
      'FR',
      '2598765432',
      'Gustave',
      new Date('2020-01-01'),
      Sexe.M,
      new Date('2020-01-02'),
      new Date('2020-01-02T12:34:56'),
    ),
    new Bovin(
      'FR',
      '2567890123',
      'Blanchette',
      new Date('2021-01-01'),
      Sexe.F,
      new Date('2021-01-02'),
      new Date('2021-01-02T12:34:56'),
    ),
  ];

  getBovins(): Bovin[] {
    return BovinService.bovins;
  }

  getBovin(copaip: string, nunati: string): Bovin | undefined {
    console.log('copaip', copaip);
    console.log('nunati', nunati);

    return BovinService.bovins.find(
      (bovin: Bovin) =>
        bovin.getCopaip() === copaip && bovin.getNunati() === nunati,
    );
  }
}
