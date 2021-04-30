import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Test {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column((type) => Question)
  questions: Question[] = [];
}
