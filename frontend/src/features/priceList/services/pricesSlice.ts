import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PriceItem, PriceState } from "../types";

const initialState: PriceState = {
  data: [],
  status: "idle",
};

export const fetchPrices = createAsyncThunk<PriceItem[]>(
  "prices/fetchPrices",
  async () => {
    const response = await axios.get<PriceItem[]>("/api/prices");
    return response.data;
  }
);

export const updatePrice = createAsyncThunk<
  PriceItem,
  { id: string; updatedItem: PriceItem }
>("prices/updatePrice", async ({ id, updatedItem }) => {
  const response = await axios.put<PriceItem>(`/api/prices/${id}`, updatedItem);
  return response.data;
});

const pricesSlice = createSlice({
  name: "prices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchPrices.fulfilled,
        (state, action: PayloadAction<PriceItem[]>) => {
          state.data = action.payload;
        }
      )
      .addCase(
        updatePrice.fulfilled,
        (state, action: PayloadAction<PriceItem>) => {
          const index = state.data.findIndex(
            (item) => item.id === action.payload.id
          );
          if (index !== -1) {
            state.data[index] = action.payload;
          }
        }
      );
  },
});

export default pricesSlice.reducer;
