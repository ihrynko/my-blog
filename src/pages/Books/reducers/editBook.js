import { updateFunctionStart } from "../thunks/editBook";

export const editBookExtraReducer = {
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
