import { createAsyncThunk } from "@reduxjs/toolkit";
import { addBook } from "../../../api/books";

import { booksFetchInStart } from "./books";
import { toggleCreateModal } from "../components/BookAddModal/redux/slice";

const ADD_FUNCTION_START = "ADD_FUNCTION_START";

export const addFunctionStart = createAsyncThunk(
  ADD_FUNCTION_START,
  async (book, { rejectWithValue, dispatch }) => {
    try {
      await addBook(book);
      dispatch(toggleCreateModal());
      await dispatch(booksFetchInStart());
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
