import { createSlice } from "@reduxjs/toolkit";

const MODAL = "MODAL";

const initialState = {
  onShow: false,
};

const modalSlice = createSlice({
  name: MODAL,
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.onShow = !state.onShow;
    },
  },
});

export const modalReducer = modalSlice.reducer;

export const { toggleModal } = modalSlice.actions;
