import { createSlice } from "@reduxjs/toolkit";
import {
  bookDeleteItemDataSet,
  bookDeleteInProgress,
  bookDeleteSuccess,
  bookDeleteError,
  deleteBookModalReset,
} from "../actions/deleteBook";

export const initialState = {
  loading: false,
  data: {},
  error: null,
};

const DELETE_BOOK = "DELETE_BOOK";

const deleteBookSlice = createSlice({
  name: DELETE_BOOK,
  initialState,
  reducers: {
    bookDeleteItemDataSet,
    bookDeleteInProgress,
    bookDeleteSuccess,
    bookDeleteError,
    deleteBookModalReset,
  },
});
export const {
  bookDeleteItemDataSet: bookDeleteItemDataSetAction,
  bookDeleteInProgress: bookDeleteInProgressAction,
  bookDeleteSuccess: bookDeleteSuccessAction,
  bookDeleteError: bookDeleteErrorAction,
  deleteBookModalReset: deleteBookModalResetAction,
} = deleteBookSlice.actions;

export const deleteBook = deleteBookSlice.reducer;
