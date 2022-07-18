import { createSlice } from "@reduxjs/toolkit";

const CREATEMODAL = "CREATEMODAL";

const initialState = {
  onShow: false,
};

const modalCreateSlice = createSlice({
  name: CREATEMODAL,
  initialState,
  reducers: {
    toggleCreateModal: (state) => {
      state.onShow = !state.onShow;
    },
  },
});

export const modalCreateReducer = modalCreateSlice.reducer;

export const { toggleCreateModal } = modalCreateSlice.actions;
