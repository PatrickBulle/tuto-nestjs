import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'animal' })
export class BovinEntity extends BaseEntity {
  // Code pays
  @PrimaryColumn({ name: 'copaip', nullable: false })
  copaip: string;
  // Numéro national
  @PrimaryColumn({ name: 'nunati', nullable: false })
  nunati: string;
  // Nom
  @Column({ name: 'nobovi', nullable: true })
  nobovi: string;
  // Date de naissance
  @Column({ name: 'danais', nullable: false, type: 'timestamptz' })
  danais: Date;
  // Sexe
  @Column({ name: 'sexbov', nullable: false })
  sexbov: string;
}
