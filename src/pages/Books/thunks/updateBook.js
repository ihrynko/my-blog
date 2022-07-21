import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { updateBook, getBookItem } from "../../../api/books";
import { booksFetchInStart } from "./books";
import {
  bookUpdateInProgressAction,
  bookUpdateSuccessAction,
  bookUpdateErrorAction,
} from "../reducers/updateBook";

import { modalOpenToggleAction } from "../../../store/modal/reducers/modal";

const UPDATE_BOOK_THUNK = "UPDATE_BOOK_THUNK";
const UPDATE_FETCH_DATA_THUNK = "UPDATE_FETCH_DATA_THUNK";

export const updateFetchDataStart = createAsyncThunk(
  UPDATE_FETCH_DATA_THUNK,
  async (data, { rejectWithValue }) => {
    try {
      return await getBookItem(data.id);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const updateBookItem = createAsyncThunk(
  UPDATE_BOOK_THUNK,
  async (data, { dispatch }) => {
    try {
      dispatch(bookUpdateInProgressAction());
      await updateBook(data, data.id);
      dispatch(bookUpdateSuccessAction());
      dispatch(modalOpenToggleAction());
      await dispatch(booksFetchInStart());
      toast.success("Book is updated!");
    } catch (error) {
      dispatch(bookUpdateErrorAction(error.data));
      toast.error("Something went wrong");
    }
  }
);
