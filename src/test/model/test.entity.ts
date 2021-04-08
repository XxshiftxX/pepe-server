import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Test {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column((type) => Question)
  questions: Question[] = [];
}
