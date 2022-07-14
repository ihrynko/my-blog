import { createSlice } from "@reduxjs/toolkit";
import { booksExtraReducer } from "../reducers/books";

const BOOKS = "BOOKS";

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const booksSlice = createSlice({
  name: BOOKS,
  initialState,
  reducers: {
    booksFetchStart: () => {},
  },
  extraReducers: booksExtraReducer,
});

export const booksReducer = booksSlice.reducer;

export const { booksFetchStart } =
  booksSlice.actions;