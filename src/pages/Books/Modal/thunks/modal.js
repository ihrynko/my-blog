import { createAsyncThunk } from "@reduxjs/toolkit";
import { addBook, updateBook, deleteBook } from "../../../../api/books";
import { booksFetchInStart } from "../../thunks/books";
import { toggleModal } from "../../../../components/Modal_redux/slice";

const ADD_FUNCTION_START = "ADD_FUNCTION_START";
const DELETE_FUNCTION_START = "DELETE_FUNCTION_START";
const UPDATE_FUNCTION_START = "UPDATE_FUNCTION_START";

export const addFunctionStart = createAsyncThunk(
  ADD_FUNCTION_START,
  async (book, { rejectWithValue, dispatch }) => {
    try {
      await addBook(book);
      dispatch(booksFetchInStart());
      dispatch(toggleModal());
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const deleteFunctionStart = createAsyncThunk(
  DELETE_FUNCTION_START,
  async (id, { rejectWithValue }) => {
    try {
      return await deleteBook(id);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const updateFunctionStart = createAsyncThunk(
  UPDATE_FUNCTION_START,
  async ({ id, book }, { rejectWithValue }) => {
    try {
      return await updateBook(id, book);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
