import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// import { api } from './services/base';
import auth from "./features/auth";
import layout from "./features/layout";
import controller3D from "./features/controller3D";
import classroom from "./features/classroom";

export const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined,
) =>
  configureStore({
    reducer: {
      // [api.reducerPath]: api.reducer,
      // auth,
      // layout,
      controller3D,
      // classroom,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
    // .concat(api.middleware)
    ...options,
  });

export const store = createStore();

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
