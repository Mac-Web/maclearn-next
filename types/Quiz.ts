export type QuestionType = {
  question: string;
  options: string[];
  correct: number;
};

export type QuizType = {
  id: number;
  name: string;
  description: string;
  questions: QuestionType[];
  prev: number;
  end: string;
  unit: string;
  slug: string;
};
