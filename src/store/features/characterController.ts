import { Controller3DEnum } from '@/helpers/enum/controller3D';
import { createSlice } from '@reduxjs/toolkit';

export interface ControllerInterface {
  controllerMode: Controller3DEnum;
  isShowCharacter: boolean;
  targetPoint: {
    x: number;
    y: number;
    z: number;
  };
}

const initialState: ControllerInterface = {
  controllerMode: Controller3DEnum?.MOUSE,
  isShowCharacter: false,
  targetPoint: {
    x: 0,
    y: 0,
    z: 0,
  },
};

const slice = createSlice({
  name: 'characterController',
  initialState,
  reducers: {
    actionChangeControllerMode: (state, action) => {
      state.controllerMode = action.payload;
    },
    actionToggleChacracter: (state, action) => {
      state.isShowCharacter = action.payload;
    },
    actionChangeTargetPoint: (state, action) => {
      state.targetPoint = action.payload;
    },
  },
});

export const {
  actionChangeControllerMode,
  actionToggleChacracter,
  actionChangeTargetPoint,
} = slice.actions;

export default slice.reducer;
