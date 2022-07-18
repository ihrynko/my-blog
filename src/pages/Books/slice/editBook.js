import { createSlice } from "@reduxjs/toolkit";
import { editBookExtraReducer } from "../reducers/editBook";

const EDITBOOK = "EDITBOOK";

const initialState = {
  data: {},
  loading: true,
  error: null,
};

const editBookSlice = createSlice({
  name: EDITBOOK,
  initialState,
  reducers: {},
  extraReducers: editBookExtraReducer,
});

export const editBookReducer = editBookSlice.reducer;
