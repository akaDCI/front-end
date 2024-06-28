import { createSlice } from '@reduxjs/toolkit';

export interface LayoutInterface {
  isCollapseSideBar: boolean | null;
  progressLoading3D: number;
  isFirstVisit: boolean;
}

const initialState: LayoutInterface = {
  isCollapseSideBar: null,
  progressLoading3D: 0,
  isFirstVisit: false,
};

const slice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    actionCollapseSideBar: (state, action) => {
      state.isCollapseSideBar = action.payload;
    },
    actionChangeProgressLoading3D: (state, action) => {
      state.progressLoading3D = action.payload;
    },
    actionChangeFirstVisit: (state, action) => {
      state.isFirstVisit = action.payload;
    },
  },
});

export const {
  actionCollapseSideBar,
  actionChangeProgressLoading3D,
  actionChangeFirstVisit,
} = slice.actions;
export default slice.reducer;
