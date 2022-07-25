import { createSlice } from "@reduxjs/toolkit";

import { modalOpenToggle } from "../actions/modal";

const MODAL_SLICE_NAME = "MODAL_SLICE";

const initialState = { open: false, name: null };

const modalSlice = createSlice({
  name: MODAL_SLICE_NAME,
  initialState,
  reducers: { modalOpenToggle },
});

export const { modalOpenToggle: modalOpenToggleAction } = modalSlice.actions;

export const modal = modalSlice.reducer;
