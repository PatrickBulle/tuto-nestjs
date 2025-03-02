export enum Sexe {
  M = 1,
  F = 2,
}

export class Bovin {
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
  // Date de création de l'enregistrement
  private dcre: Date;
  // Date de mise à jour de l'enregistrement
  private dmaj: Date;

  constructor(
    copaip: string | null = null,
    nunati: string | null = null,
    nobovi: string | null = null,
    danais: Date | null = null,
    sexbov: Sexe | null = null,
    dcre: Date | null = null,
    dmaj: Date | null = null,
  ) {
    this.init(copaip, nunati, nobovi, danais, sexbov, dcre, dmaj);
  }

  private init(
    copaip: string | null = null,
    nunati: string | null = null,
    nobovi: string | null = null,
    danais: Date | null = null,
    sexbov: Sexe | null = null,
    dcre: Date | null = null,
    dmaj: Date | null = null,
  ): void {
    this.setCopaip(copaip ?? '');
    this.setNunati(nunati ?? '');
    this.setNobovi(nobovi ?? '');
    this.setDanais(danais ?? new Date());
    this.setSexbov(sexbov ?? Sexe.F);
    this.setDcre(dcre ?? new Date());
    this.setDmaj(dmaj ?? new Date());
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

  getDcre(): Date {
    return this.dcre;
  }

  getDmaj(): Date {
    return this.dmaj;
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

  setDcre(dcre: Date): void {
    this.dcre = dcre;
  }

  setDmaj(dmaj: Date): void {
    this.dmaj = dmaj;
  }
}
