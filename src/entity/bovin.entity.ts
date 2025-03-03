import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum Sexe {
  M = 1,
  F = 2,
}

@Entity({ name: 'animal' })
export class Bovin extends BaseEntity {
  // Code pays
  @PrimaryColumn({ name: 'copaip', nullable: false })
  private copaip: string;
  // Numéro national
  @PrimaryColumn({ name: 'nunati', nullable: false })
  private nunati: string;
  // Nom
  @Column({ name: 'nobovi', nullable: true })
  private nobovi: string;
  // Date de naissance
  @Column({ name: 'danais', nullable: false, type: 'timestamptz' })
  private danais: Date;
  // Sexe
  @Column({ name: 'sexbov', nullable: false, type: 'enum', enum: Sexe })
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
