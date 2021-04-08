import { Column } from 'typeorm';

export class Choice {
  @Column()
  title: string;

  @Column()
  weights: number[];
}
