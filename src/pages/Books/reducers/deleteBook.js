import { createSlice } from "@reduxjs/toolkit";
import {
  bookDeleteItemDataSet,
  bookDeleteInProgress,
  bookDeleteSuccess,
  bookDeleteError,
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
  },
});
export const {
  bookDeleteItemDataSet: bookDeleteItemDataSetAction,
  bookDeleteInProgress: bookDeleteInProgressAction,
  bookDeleteSuccess: bookDeleteSuccessAction,
  bookDeleteError: bookDeleteErrorAction,
} = deleteBookSlice.actions;

export const deleteBook =  deleteBookSlice.reducer;
