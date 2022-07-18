import { createSlice } from "@reduxjs/toolkit";

const EDITMODAL = "EDITMODAL";

const initialState = {
  onShow: false,
};

const modalEditSlice = createSlice({
  name: EDITMODAL,
  initialState,
  reducers: {
    toggleEditModal: (state) => {
      state.onShow = !state.onShow;
    },
  },
});

export const modalEditReducer = modalEditSlice.reducer;

export const { toggleEditModal } = modalEditSlice.actions;
