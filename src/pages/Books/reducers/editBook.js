import { updateFetchDataStart, updateFunctionStart } from "../thunks/editBook";

export const editBookExtraReducer = {
  [updateFetchDataStart.pending]: (state) => {
    state.loading = true;
  },
  [updateFetchDataStart.fulfilled]: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  [updateFetchDataStart.rejected]: (state) => {
    state.loading = false;
    state.error = true;
  },
  [updateFunctionStart.pending]: (state) => {
    state.loading = true;
  },
  [updateFunctionStart.fulfilled]: (state, action) => {
    state.loading = false;
    // state.data = action.payload;
  },
  [updateFunctionStart.rejected]: (state) => {
    state.loading = false;
    state.error = true;
  },
};
