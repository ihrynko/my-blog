import { createSlice } from "@reduxjs/toolkit";
import { statisticsExtraReducer } from "../reducers/statistics";

const STATISTICS = "STATISTICS";

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const statisticsSlice = createSlice({
  name: STATISTICS,
  initialState,
  reducers: {},
  extraReducers: statisticsExtraReducer,
});

export const statisticsReducer = statisticsSlice.reducer;
