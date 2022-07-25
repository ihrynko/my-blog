import { createSlice } from "@reduxjs/toolkit";
import {
  bookCreateInProgress,
  bookCreateSuccess,
  bookCreateError,
  bookCreateModalReset,
} from "../actions/createBook";

export const initialState = {
  loading: false,
  data: {},
  error: null,
};

const CREATE_BOOK = "CREATE_BOOK";

const createBookSlice = createSlice({
  name: CREATE_BOOK,
  initialState,
  reducers: {
    bookCreateInProgress,
    bookCreateSuccess,
    bookCreateError,
    bookCreateModalReset,
  },
});
export const {
  bookCreateInProgress: bookCreateInProgressAction,
  bookCreateSuccess: bookCreateSuccessAction,
  bookCreateError: bookCreateErrorAction,
  bookCreateModalReset: bookCreateModalResetAction,
} = createBookSlice.actions;

export const createBook = createBookSlice.reducer;
