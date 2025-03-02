import { Bovin } from 'src/entity/bovin';
import { Tools } from 'src/tools/tools';

export class BovinDto {
  private copaip: string;
  private nunati: string;
  private nobovi: string;
  private danais: string;
  private sexbov: string;

  static fromEntity(bovin: Bovin): BovinDto {
    const bovinDto = new BovinDto();

    bovinDto.copaip = bovin.getCopaip();
    bovinDto.nunati = bovin.getNunati();
    bovinDto.nobovi = bovin.getNobovi();
    bovinDto.danais = Tools.dateToStringIso8601(bovin.getDanais());
    bovinDto.sexbov = bovin.getSexbov().valueOf().toString();
    return bovinDto;
  }
}
