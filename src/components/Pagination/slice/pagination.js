import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../actions/pagination";

const initialState = {
  currentPage: 1,
  itemsPerPage: 9,
};

const PAGINATION = "PAGINATION";

const paginationSlice = createSlice({
  name: PAGINATION,
  initialState,
  reducers: {
    paginationChangePage: actions.paginationChangePageAction,
    paginationChangeItemsPerPage: actions.paginationChangeItemsPerPageAction,
  },
});

export const { paginationChangePage, paginationChangeItemsPerPage } =
  paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
