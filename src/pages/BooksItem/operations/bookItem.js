import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBookItem } from "../../../api/books";

export const bookItemFetchInStart = createAsyncThunk(
  "bookItemFetchInStart",
  async (id, { rejectWithValue }) => {
    try {
      return await getBookItem(id);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
