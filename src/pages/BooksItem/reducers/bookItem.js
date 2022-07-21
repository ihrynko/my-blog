import { createSlice } from "@reduxjs/toolkit";
import { bookItemFetchInStart } from "../thunks/bookItem";

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
  extraReducers: (builder) => {
    builder
      .addCase(bookItemFetchInStart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookItemFetchInStart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(bookItemFetchInStart.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const bookItem = bookItemSlice.reducer;
