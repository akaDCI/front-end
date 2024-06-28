import { createSlice } from "@reduxjs/toolkit";

import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";

const isAuthFromStorage: boolean = webStorageClient.get(constants.IS_AUTH);
const userInfoFromStorage: object = webStorageClient.get(constants.USER_INFO);
const subInfoFromStorage: object = webStorageClient.get(
  constants.SUB_ACCOUNT_INFO,
);

export interface AuthInterface {
  isAuth: boolean;
  userInfo: object;
  subInfo: object;
  forgotPasswordData: {
    email?: string;
    otpCode?: string;
  } | null;
  showForgotPasswordModal?: boolean;
}

const initialState: AuthInterface = {
  isAuth: isAuthFromStorage || false,
  userInfo: userInfoFromStorage || {},
  subInfo: subInfoFromStorage || {},
  forgotPasswordData: null,
  showForgotPasswordModal: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      webStorageClient.removeAll();
      state.isAuth = false;
      state.userInfo = {};
    },

    actionForgotPassword: (state, action) => {
      state.forgotPasswordData = action.payload;
    },

    actionShowForgotPasswordModal: (state, action) => {
      state.showForgotPasswordModal = action.payload;
    },
    actionChooseSubAccount: (state, action) => {
      state.subInfo = action.payload;
      webStorageClient.set(constants.SUB_ACCOUNT_INFO, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authAPI.endpoints.signIn.matchPending, () => {
        //
      })
      .addMatcher(authAPI.endpoints.signIn.matchFulfilled, (state, action) => {
        webStorageClient.setToken(action?.payload?.accessToken);
        webStorageClient.set(constants.USER_INFO, action?.payload?.user);
        webStorageClient.set(constants.IS_AUTH, true);
        state.isAuth = true;
        state.userInfo = action?.payload?.user;
      })
      .addMatcher(authAPI.endpoints.signIn.matchRejected, (state) => {
        webStorageClient.removeAll();
        state.isAuth = false;
        state.userInfo = {};
      });
  },
});

export const {
  logout,
  actionForgotPassword,
  actionShowForgotPasswordModal,
  actionChooseSubAccount,
} = slice.actions;
export default slice.reducer;
