import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateBook, getBookItem } from "../../../api/books";
import { toggleEditModal } from "../components/BookEditModal/redux/slice";
import { booksFetchInStart } from "./books";

const UPDATE_FUNCTION_START = "UPDATE_FUNCTION_START";
const UPDATE_FETCH_DATA_START = "UPDATE_FETCH_DATA_START";

export const updateFetchDataStart = createAsyncThunk(
  UPDATE_FETCH_DATA_START,
  async (id, { rejectWithValue }) => {
    try {
      return await getBookItem(id);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const updateFunctionStart = createAsyncThunk(
  UPDATE_FUNCTION_START,
  async ({ id, data }, { rejectWithValue, dispatch }) => {
    try {
      await updateBook(id, data);
      dispatch(toggleEditModal());
      await dispatch(booksFetchInStart());
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
