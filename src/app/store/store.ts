"use client";

import { logger } from "redux-logger";
import { thunk } from "redux-thunk";
import { Tuple, configureStore } from "@reduxjs/toolkit";

import rootReducer from "./root-reducer";
// @ts-ignore
import storage from "redux-persist/lib/storage";
// @ts-ignore
import persistReducer from "redux-persist/es/persistReducer";
// @ts-ignore
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cartReducer"],
};

const persistRootReducer: typeof rootReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistRootReducer,
  middleware: () => new Tuple(thunk, logger),
});
export const persisterStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
