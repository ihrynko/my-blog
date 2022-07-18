import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { deleteBook } from "../../../api/books";
import { booksFetchInStart } from "./books";

const DELETE_FUNCTION_START = "DELETE_FUNCTION_START";

export const deleteFunctionStart = createAsyncThunk(
  DELETE_FUNCTION_START,
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await deleteBook(id);
      await dispatch(booksFetchInStart());
      toast.success("Book is deleted!");
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
