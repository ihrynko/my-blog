import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteBook } from "../../../api/books";
import { booksFetchInStart } from "./books";

const DELETE_FUNCTION_START = "DELETE_FUNCTION_START";

export const deleteFunctionStart = createAsyncThunk(
  DELETE_FUNCTION_START,
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await deleteBook(id);
      await dispatch(booksFetchInStart());
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
