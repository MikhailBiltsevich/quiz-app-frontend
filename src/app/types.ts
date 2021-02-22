export interface IState {
  quiz: IQuiz
}

export interface IQuiz {
  title: string,
  questions: IQuestion[]
};

export interface IQuestion {
  id: number,
  text: string,
  isMultiple: boolean,
  answers: IAnswer[]
}

export interface IAnswer {
  id: number,
  text: string,
  points: number
}