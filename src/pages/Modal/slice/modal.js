import { createSlice } from "@reduxjs/toolkit";
import { modalExtraReducer } from "../reducers/modal";

const MODAL = "MODAL";

const initialState = {
  data: {},
  loading: true,
  error: null,
  onShow: false,
};

const modalSlice = createSlice({
  name: MODAL,
  initialState,
  reducers: {
    modalFetchClose: () => {},
    modalFetchStart: () => {
      this.state.onShow = true;
    },
    addBookFetchStart: () => {},
    deleteBookFetchStart: () => {},
    updateBookFetchStart: () => {},
  },
  extraReducers: modalExtraReducer,
});

export const modalReducer = modalSlice.reducer;

export const {
  modalFetchClose,
  modalFetchStart,
  addBookFetchStart,
  deleteBookFetchStart,
  updateBookFetchStart,
} = modalSlice.actions;
