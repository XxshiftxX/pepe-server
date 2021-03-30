export type Choice = { title: string, weights: number[] };
export type Question = { title: string, choices: Choice[] };
export class Test {
  id: string;

  title: string;

  questions: Question[] = [];
}
