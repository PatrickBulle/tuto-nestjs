import { Column } from 'typeorm';

export abstract class BaseEntity {
  // Date de création de l'enregistrement
  @Column({ name: 'dcre', nullable: false, type: 'timestamptz' })
  dcre: Date;
  // Date de mise à jour de l'enregistrement
  @Column({ name: 'dmaj', nullable: false, type: 'timestamptz' })
  dmaj: Date;
}
