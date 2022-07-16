import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../../../api/books";

export const booksFetchInStart = createAsyncThunk(
  "booksFetchInStart",
  async (_, { rejectWithValue }) => {
    try {
      return await getBooks();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
