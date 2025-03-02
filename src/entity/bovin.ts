import { Entity } from './Entity';

export enum Sexe {
  M = 1,
  F = 2,
}

export class Bovin extends Entity {
  // Code pays
  private copaip: string;
  // Numéro national
  private nunati: string;
  // Nom
  private nobovi: string;
  // Date de naissance
  private danais: Date;
  // Sexe
  private sexbov: Sexe;

  constructor(
    copaip: string | null = null,
    nunati: string | null = null,
    nobovi: string | null = null,
    danais: Date | null = null,
    sexbov: Sexe | null = null,
    dcre: Date | null = null,
    dmaj: Date | null = null,
  ) {
    super(dcre, dmaj);
    this.initBovin(copaip, nunati, nobovi, danais, sexbov);
  }

  private initBovin(
    copaip: string | null = null,
    nunati: string | null = null,
    nobovi: string | null = null,
    danais: Date | null = null,
    sexbov: Sexe | null = null,
  ): void {
    this.setCopaip(copaip ?? '');
    this.setNunati(nunati ?? '');
    this.setNobovi(nobovi ?? '');
    this.setDanais(danais ?? new Date());
    this.setSexbov(sexbov ?? Sexe.F);
  }

  getCopaip(): string {
    return this.copaip;
  }

  getNunati(): string {
    return this.nunati;
  }

  getNobovi(): string {
    return this.nobovi;
  }

  getDanais(): Date {
    return this.danais;
  }

  getSexbov(): Sexe {
    return this.sexbov;
  }

  setCopaip(copaip: string): void {
    this.copaip = copaip;
  }

  setNunati(nunati: string): void {
    this.nunati = nunati;
  }

  setNobovi(nobovi: string): void {
    this.nobovi = nobovi;
  }

  setDanais(danais: Date): void {
    if (danais > new Date()) {
      throw new Error(
        'La date de naissance ne peut pas être supérieure à la date du jour',
      );
    }
    this.danais = danais;
  }

  setSexbov(sexbov: Sexe): void {
    this.sexbov = sexbov;
  }
}
