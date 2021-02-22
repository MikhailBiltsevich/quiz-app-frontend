import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion, IQuiz, IState } from "../types";

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    title: '',
    questions: new Array<IQuestion>()
  } as IQuiz,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },

    addQuestion: (state, action: PayloadAction<IQuestion>) => {
      state.questions.push(action.payload);
    },

    removeQuestion: (state, action: PayloadAction<number>) => {
      state.questions.splice(action.payload, 1);
    }
  }
});

export const { setTitle, addQuestion, removeQuestion } = quizSlice.actions;

export const selectTitle = (state: IState) => state.quiz.title;
export const selectQuestions = (state: IState) => state.quiz.questions;

export default quizSlice.reducer;