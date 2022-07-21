import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../../../api/books";

const BOOKS_FETCH_IN_START = "BOOKS_FETCH_IN_START";

export const booksFetchInStart = createAsyncThunk(
  BOOKS_FETCH_IN_START,
  async (_, { rejectWithValue }) => {
    try {
      return await getBooks();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
