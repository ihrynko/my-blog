import { deleteFunctionStart } from "../thunks/deleteBook";

export const deleteBookExtraReducer = {
  [deleteFunctionStart.pending]: (state) => {
    state.loading = true;
  },
  [deleteFunctionStart.fulfilled]: (state, action) => {
    state.loading = false;
    const { id } = action.payload;
    state.data = state.data.filter((book) => book.id !== id);
  },
  [deleteFunctionStart.rejected]: (state) => {
    state.loading = false;
    state.error = true;
  },
};
