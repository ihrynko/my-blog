import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteBook } from "../../../api/books";

const DELETE_FUNCTION_START = "DELETE_FUNCTION_START";

export const deleteFunctionStart = createAsyncThunk(
  DELETE_FUNCTION_START,
  async (book, { rejectWithValue }) => {
    try {
      return await deleteBook(book._id);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
