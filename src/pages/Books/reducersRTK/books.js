import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    booksInProgress: (state) => {
      state.loading = true;
    },
    booksSuccess: (state, action) => {
      state.loading = false;
      const { data } = action.payload;
      state.data = data;
    },
    booksError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const booksReducer = booksSlice.reducer;

export const { booksInProgress, booksSuccess, booksError } = booksSlice.actions;
