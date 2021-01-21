import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  num: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  isRoot: boolean;

  @Column({ nullable: true })
  isActive: boolean;
}
