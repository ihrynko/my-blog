import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBookItem } from "../../../api/books";

const BOOKITEM_FETCH_START = "BOOKITEM_FETCH_START";

export const bookItemFetchInStart = createAsyncThunk(
  BOOKITEM_FETCH_START,
  async (id, { rejectWithValue }) => {
    try {
      return await getBookItem(id);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
