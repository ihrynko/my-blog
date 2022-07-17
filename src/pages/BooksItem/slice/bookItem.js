import { createSlice } from "@reduxjs/toolkit";
import { bookItemExtraReducer } from "../reducers/bookItem";

const BOOKITEM = "BOOKITEM";

const initialState = {
  data: {},
  error: null,
  loading: true,
};

const bookItemSlice = createSlice({
  name: BOOKITEM,
  initialState,
  reducers: {},
  extraReducers: bookItemExtraReducer,
});

export const bookItemReducer = bookItemSlice.reducer;
