import { addFunctionStart } from "../thunks/addBook";

export const addBookExtraReducer = {
  [addFunctionStart.pending]: (state) => {
    state.loading = true;
  },
  [addFunctionStart.fulfilled]: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  [addFunctionStart.rejected]: (state) => {
    state.loading = false;
    state.error = true;
  },
};
