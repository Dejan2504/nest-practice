import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class KrajaEntity {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  firstName: string;

  @Column()
  surename: string;
}
