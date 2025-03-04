export abstract class BaseModel {
  // Date de création de l'enregistrement
  private dcre: Date;
  // Date de mise à jour de l'enregistrement
  private dmaj: Date;

  constructor(dcre: Date | null = null, dmaj: Date | null = null) {
    this.init(dcre, dmaj);
  }

  private init(dcre: Date | null = null, dmaj: Date | null = null): void {
    this.setDcre(dcre ?? new Date());
    this.setDmaj(dmaj ?? new Date());
  }

  getDcre(): Date {
    return this.dcre;
  }

  getDmaj(): Date {
    return this.dmaj;
  }

  setDcre(dcre: Date): void {
    this.dcre = dcre;
  }

  setDmaj(dmaj: Date): void {
    this.dmaj = dmaj;
  }
}
