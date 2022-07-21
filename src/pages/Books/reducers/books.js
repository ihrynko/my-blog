import { createSlice } from "@reduxjs/toolkit";
import { booksFetchInStart } from "../thunks/books";

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
      .addCase(booksFetchInStart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(booksFetchInStart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(booksFetchInStart.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const books = booksSlice.reducer;
