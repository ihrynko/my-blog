import { createSlice } from "@reduxjs/toolkit";
import { statisticsFetchStart } from "../thunks/statistics";


const initialState = {
  data: [],
  error: null,
  loading: true,
};

const STATISTICS = "STATISTICS";

const statisticsSlice = createSlice({
  name: STATISTICS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(statisticsFetchStart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(statisticsFetchStart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(statisticsFetchStart.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const statistics = statisticsSlice.reducer;
