import { deleteFunctionStart } from "../thunks/deleteBook";

export const deleteBookExtraReducer = {
  [deleteFunctionStart.pending]: (state) => {
    state.loading = true;
  },
  [deleteFunctionStart.fulfilled]: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  [deleteFunctionStart.rejected]: (state) => {
    state.loading = false;
    state.error = true;
  },
};
