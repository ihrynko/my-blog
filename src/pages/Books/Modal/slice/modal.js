import { createSlice } from "@reduxjs/toolkit";
import { modalExtraReducer } from "../reducers/modal";

const CRUD = "CRUD";

const initialState = {
  // data: {},
  loading: true,
  error: null,
};

const crudSlice = createSlice({
  name: CRUD,
  initialState,
  reducers: {},
  extraReducers: modalExtraReducer,
});

export const crudReducer = crudSlice.reducer;
