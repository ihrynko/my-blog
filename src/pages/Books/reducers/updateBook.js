import { createSlice } from "@reduxjs/toolkit";
import { updateFetchDataStart } from "../thunks/updateBook";
import {
  bookUpdateItemIdSet,
  bookUpdateInProgress,
  bookUpdateSuccess,
  bookUpdateError,
} from "../actions/updateBook";

const UPDATE_BOOK = "UPDATE_BOOK";

const initialState = {
  loading: true,
  data: {},
  fetchData: {},
  error: null,
};

const updateBookSlice = createSlice({
  name: UPDATE_BOOK,
  initialState,
  reducers: {
    bookUpdateInProgress,
    bookUpdateSuccess,
    bookUpdateError,
    bookUpdateItemIdSet,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateFetchDataStart.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateFetchDataStart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      })
      .addCase(updateFetchDataStart.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {
  bookUpdateItemIdSet: bookUpdateItemIdSetAction,
  bookUpdateInProgress: bookUpdateInProgressAction,
  bookUpdateSuccess: bookUpdateSuccessAction,
  bookUpdateError: bookUpdateErrorAction,
} = updateBookSlice.actions;

export const updateBook = updateBookSlice.reducer;
