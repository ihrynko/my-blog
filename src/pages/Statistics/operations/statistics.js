import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../../../api/books";

export const statisticsFetchStart = createAsyncThunk(
  "statisticsFetchStart",
  async (_, { rejectWithValue }) => {
    try {
      return await getBooks();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
