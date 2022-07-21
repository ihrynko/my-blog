import { createSlice } from "@reduxjs/toolkit";
import {
  bookCreateInProgress,
  bookCreateSuccess,
  bookCreateError,
  addBookModalReset,
} from "../actions/addBook";

export const initialState = {
  loading: false,
  data: {},
  error: null,
};

const ADD_BOOK = "ADD_BOOK";

const addBookSlice = createSlice({
  name: ADD_BOOK,
  initialState,
  reducers: {
    bookCreateInProgress,
    bookCreateSuccess,
    bookCreateError,
    addBookModalReset,
  },
});
export const {
  bookCreateInProgress: bookCreateInProgressAction,
  bookCreateSuccess: bookCreateSuccessAction,
  bookCreateError: bookCreateErrorAction,
  addBookModalReset: addBookModalResetAction,
} = addBookSlice.actions;

export const addBook = addBookSlice.reducer;
