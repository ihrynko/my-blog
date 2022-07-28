import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../../../api/books";

const STATISTICS_FETCH_START = "STATISTICS_FETCH_START";

export const statisticsFetchStart = createAsyncThunk(
  STATISTICS_FETCH_START,
  async (_, { rejectWithValue }) => {
    try {
      return await getBooks();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
