import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateBook } from "../../../api/books";

const UPDATE_FUNCTION_START = "UPDATE_FUNCTION_START";

export const updateFunctionStart = createAsyncThunk(
  UPDATE_FUNCTION_START,
  async (book, { rejectWithValue }) => {
    try {
      return await updateBook(book, book.id);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
