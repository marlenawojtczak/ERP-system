import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types";

const initialState: UserState = {
  isAdmin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
    // Możesz dodać więcej reducerów dla innych akcji związanych z użytkownikiem
  },
});

export const { setAdmin } = userSlice.actions;
export default userSlice.reducer;
