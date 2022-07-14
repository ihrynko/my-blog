import { createAsyncThunk } from "@reduxjs/toolkit";
import { addBook, updateBook, deleteBook } from "../../../../api/books";

export const addFunctionStart = createAsyncThunk(
  "addFunctionStart",
  async (book, { rejectWithValue }) => {
    try {
      return await addBook(book);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const deleteFunctionStart = createAsyncThunk(
  "deleteFunctionStart",
  async (id, { rejectWithValue }) => {
    try {
      return await deleteBook(id);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const updateFunctionStart = createAsyncThunk(
  "updateFunctionStart",
  async (id, { rejectWithValue }) => {
    try {
      return await updateBook(id);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
