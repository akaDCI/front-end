import { createSlice } from '@reduxjs/toolkit';

export interface ClassroomInterface {
  currentClassroom: any;
  currentExamRoom: any;
  userAnswer: {
    answer: string[];
    question: string;
    questionCategory: string;
  }[];
}

const initialState: ClassroomInterface = {
  currentClassroom: {},
  currentExamRoom: {},
  userAnswer: [],
};

const slice = createSlice({
  name: 'classroom',
  initialState,
  reducers: {
    actionChangeCurrentClassroom: (state, action) => {
      state.currentClassroom = action.payload;
      state.currentExamRoom = {};
    },
    actionChangeCurrentExamRoom: (state, action) => {
      state.currentExamRoom = action.payload;
      state.currentClassroom = {};
    },
    actionChangeUserAnswer: (state, action) => {
      const answers = state.userAnswer.filter(
        (answer) =>
          answer?.questionCategory !== action?.payload?.questionCategory,
      );

      state.userAnswer = [...answers, action.payload];
    },
    actionResetAnswer: (state) => {
      state.userAnswer = [];
    },
  },
});

export const {
  actionChangeCurrentClassroom,
  actionChangeCurrentExamRoom,
  actionChangeUserAnswer,
  actionResetAnswer,
} = slice.actions;
export default slice.reducer;
