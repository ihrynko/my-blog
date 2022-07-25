import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { deleteBook } from "../../../api/books";
import { booksFetchStart } from "./books";
import {
  bookDeleteSuccessAction,
  bookDeleteErrorAction,
  bookDeleteInProgressAction,
  deleteBookModalResetAction,
} from "../reducers/deleteBook";

import { modalOpenToggleAction } from "../../../store/modal/reducers/modal";

const BOOK_LIST_DELETE_THUNK_TYPE = "BOOK_LIST_DELETE_THUNK_TYPE";

export const deleteBookItem = createAsyncThunk(
  BOOK_LIST_DELETE_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      dispatch(bookDeleteInProgressAction());
      await deleteBook(data._id);
      dispatch(bookDeleteSuccessAction());
      dispatch(modalOpenToggleAction());
      dispatch(deleteBookModalResetAction());
      await dispatch(booksFetchStart());
      toast.success("Book is deleted!");
    } catch (error) {
      dispatch(bookDeleteErrorAction(error.data));
      toast.error("Something went wrong");
    }
  }
);
