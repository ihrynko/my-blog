import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addBook } from "../../../api/books";
import { booksFetchInStart } from "./books";
import {
  bookCreateInProgressAction,
  bookCreateSuccessAction,
  bookCreateErrorAction,
} from "../reducers/addBook";
import { modalOpenToggleAction } from "../../../store/modal/reducers/modal";

const ADD_BOOK_THUNK = "ADD_BOOK_THUNK";

export const addBookItem = createAsyncThunk(
  ADD_BOOK_THUNK,
  async (book, { dispatch }) => {
    try {
      dispatch(bookCreateInProgressAction());
      await addBook(book);
      dispatch(bookCreateSuccessAction());
      dispatch(modalOpenToggleAction());
      await dispatch(booksFetchInStart());
      toast.success("Book is created!");
    } catch (error) {
      dispatch(bookCreateErrorAction(error.data));
      toast.error("Something went wrong");
    }
  }
);
