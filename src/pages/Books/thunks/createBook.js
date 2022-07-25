import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createBook } from "../../../api/books";
import { booksFetchStart } from "./books";
import {
  bookCreateInProgressAction,
  bookCreateSuccessAction,
  bookCreateErrorAction,
} from "../reducers/createBook";
import { modalOpenToggleAction } from "../../../store/modal/reducers/modal";

const BOOK_CREATE_THUNK = "BOOK_CREATE_THUNK";

export const bookCreate = createAsyncThunk(
  BOOK_CREATE_THUNK,
  async (data, { dispatch }) => {
    try {
      dispatch(bookCreateInProgressAction());
      await createBook(data);
      dispatch(bookCreateSuccessAction());
      dispatch(modalOpenToggleAction());
      await dispatch(booksFetchStart());
      toast.success("Book is created!");
    } catch (error) {
      dispatch(bookCreateErrorAction(error.data));
      toast.error("Something went wrong");
    }
  }
);
