import { createSlice } from "@reduxjs/toolkit";
import { deleteBookExtraReducer } from "../reducers/deleteBook";

const DELETEBOOK = "DELETEBOOK";

const initialState = {
  data: {},
  loading: true,
  error: null,
};

const deleteBookSlice = createSlice({
  name: DELETEBOOK,
  initialState,
  reducers: {},
  extraReducers: deleteBookExtraReducer,
});

export const deleteBookReducer = deleteBookSlice.reducer;
