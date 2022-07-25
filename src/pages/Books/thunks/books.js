import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../../../api/books";

const BOOKS_FETCH_START = "BOOKS_FETCH_START";

export const booksFetchStart = createAsyncThunk(
  BOOKS_FETCH_START,
  async (_, { rejectWithValue }) => {
    try {
      return await getBooks();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
