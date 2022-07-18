import { createSlice } from "@reduxjs/toolkit";
import { addBookExtraReducer } from "../reducers/addBook";

const ADDBOOK = "ADDBOOK";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const addBookSlice = createSlice({
  name: ADDBOOK,
  initialState,
  reducers: {},
  extraReducers: addBookExtraReducer,
});

export const addBookReducer = addBookSlice.reducer;
