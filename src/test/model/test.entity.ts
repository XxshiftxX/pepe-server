export class Test {
  id: string;

  title: string;

  questions: Question[] = [];
}

export type Question = { title: string, choices: Choice[] };

export type Choice = { title: string, weights: number[] };
