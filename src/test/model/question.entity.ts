import { Column } from 'typeorm';
import { Choice } from './choice.entity';

export class Question {
  @Column()
  title: string;

  @Column((type) => Choice)
  choices: Choice[];
}
