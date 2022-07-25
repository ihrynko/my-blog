import { createSlice } from "@reduxjs/toolkit";
import { booksFetchStart } from "../thunks/books";

const BOOKS = "BOOKS";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

const booksSlice = createSlice({
  name: BOOKS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(booksFetchStart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(booksFetchStart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(booksFetchStart.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const books = booksSlice.reducer;
