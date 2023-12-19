import { configureStore } from "@reduxjs/toolkit";
import pricesReducer from "./pricesSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    prices: pricesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
