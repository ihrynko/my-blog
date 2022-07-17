import { nanoid } from "@reduxjs/toolkit";

import {
  addFunctionStart,
  deleteFunctionStart,
  updateFunctionStart,
} from "../thunks/modal";

export const modalExtraReducer = {
  [addFunctionStart.pending]: (state) => {
    state.loading = true;
  },
  [addFunctionStart.fulfilled]: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  [addFunctionStart.rejected]: (state) => {
    state.loading = false;
    state.error = true;
  },
  [deleteFunctionStart.pending]: (state) => {
    state.loading = true;
  },
  [deleteFunctionStart.fulfilled]: (state, action) => {
    state.loading = false;
    const { id } = action.payload;
    state.data = state.data.filter((book) => book.id !== id);
  },
  [deleteFunctionStart.rejected]: (state) => {
    state.loading = false;
    state.error = true;
  },
  [updateFunctionStart.pending]: (state) => {
    state.loading = true;
  },
  [updateFunctionStart.fulfilled]: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  [updateFunctionStart.rejected]: (state) => {
    state.loading = false;
    state.error = true;
  },
};
