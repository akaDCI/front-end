import { Controller3DEnum } from '@/helpers/enum/controller3D';
import { createSlice } from '@reduxjs/toolkit';

export interface ControllerInterface {
  controllerMode: Controller3DEnum;
  isShowCharacter: boolean;
  isShowQuestionBox: boolean;
  isShowRoomButtons: boolean;
  isShowFloatButtons: boolean;
  isExamStarted: boolean;
  isShowControlModal: boolean;
  classroomId: string;
  studyRoomId: string;
  roomType: string;
  userAnswer: {
    answer: string;
    question: string;
    questionCategory: string;
  }[];
  examId: string;
  timer: number;
  previousClassroomViewId: string;
  showWariningExitModal?: boolean;
  onExitWarningExitModal?: any;
  onFullScreenView?: any;
  targetPoint: {
    x: number;
    y: number;
    z: number;
  };
}

const initialState: ControllerInterface = {
  controllerMode: Controller3DEnum?.MOUSE,
  isShowCharacter: false,
  isExamStarted: false,
  isShowQuestionBox: false,
  isShowRoomButtons: false,
  isShowFloatButtons: false,
  isShowControlModal: false,
  classroomId: '',
  studyRoomId: '',
  roomType: '',
  userAnswer: [],
  examId: '',
  timer: 0,
  previousClassroomViewId: '',
  showWariningExitModal: false,
  onExitWarningExitModal: () => {},
  onFullScreenView: () => {},
  targetPoint: {
    x: 0,
    y: 0,
    z: 0,
  },
};

const slice = createSlice({
  name: 'controller3D',
  initialState,
  reducers: {
    actionChangeControllerMode: (state, action) => {
      state.controllerMode = action.payload;
    },
    actionToggleChacracter: (state, action) => {
      state.isShowCharacter = action.payload;
    },
    actionToggleRoomButtons: (state, action) => {
      state.isShowRoomButtons = action.payload;
    },
    actionToggleShowQuestionBox: (state, action) => {
      state.isShowQuestionBox = action.payload;
    },
    actionChangeClassroomId: (state, action) => {
      state.classroomId = action.payload;
    },
    actionChangeStudyRoomId: (state, action) => {
      state.studyRoomId = action.payload;
    },
    actionChangeExamId: (state, action) => {
      state.examId = action.payload;
    },
    actionChangeRoomType: (state, action) => {
      state.roomType = action.payload;
    },
    actionToggleExamStarted: (state, action) => {
      state.isExamStarted = action.payload;
    },
    actionToggleWariningExitModal: (state, action) => {
      state.showWariningExitModal = action.payload;
    },
    actionToggleShowFloatButtons: (state, action) => {
      state.isShowFloatButtons = action.payload;
    },
    actionToggleShowControlModal: (state, action) => {
      state.isShowControlModal = action.payload;
    },
    actionChangeTimer: (state, action) => {
      state.timer = action.payload;
    },
    actionChangePreviousClassroomViewId: (state, action) => {
      state.previousClassroomViewId = action.payload;
    },
    actionChangeOnExitWarningExitModal: (state, action) => {
      state.onExitWarningExitModal = action.payload;
    },
    actionChangeOnFullScreenView: (state, action) => {
      state.onFullScreenView = action.payload;
    },
    actionAddUserAnswer: (state, action) => {
      const combinedArray: ControllerInterface['userAnswer'] = [
        action.payload,
        ...state.userAnswer.filter(
          (userAnswer) =>
            userAnswer.questionCategory !== action.payload.questionCategory,
        ),
      ];
      state.userAnswer = combinedArray;
    },
    actionResetUserAnswer: (state) => {
      state.userAnswer = [];
    },
    actionChangeTargetPoint: (state, action) => {
      state.targetPoint = action.payload;
    },
    actionResetTargetPoint: (state) => {
      state.targetPoint = {
        x: 0,
        y: 0,
        z: 0,
      };
    },
  },
});

export const {
  actionChangeControllerMode,
  actionToggleChacracter,
  actionToggleRoomButtons,
  actionChangeClassroomId,
  actionChangeRoomType,
  actionToggleExamStarted,
  actionChangeExamId,
  actionAddUserAnswer,
  actionChangeTimer,
  actionChangePreviousClassroomViewId,
  actionToggleShowQuestionBox,
  actionResetUserAnswer,
  actionToggleWariningExitModal,
  actionChangeOnExitWarningExitModal,
  actionChangeOnFullScreenView,
  actionToggleShowFloatButtons,
  actionToggleShowControlModal,
  actionChangeStudyRoomId,
  actionChangeTargetPoint,
  actionResetTargetPoint,
} = slice.actions;
export default slice.reducer;
