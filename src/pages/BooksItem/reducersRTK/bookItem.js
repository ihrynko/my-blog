import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  error: null,
  loading: true,
};

const bookItemSlice = createSlice({
  name: "bookItem",
  initialState,
  reducers: {
    bookItemFetchStart: (state, action) => ({
      payload: { id: action.payload.id },
    }),
    bookItemInProgress: (state) => {
      state.loading = true;
    },
    bookItemFetchSuccess: (state, action) => {
      state.loading = false;
      const { data } = action.payload;
      state.data = data;
    },
    bookItemFetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const bookItemReducer = bookItemSlice.reducer;

export const {
  bookItemFetchStart,
  bookItemInProgress,
  bookItemFetchSuccess,
  bookItemFetchError,
} = bookItemSlice.actions;
