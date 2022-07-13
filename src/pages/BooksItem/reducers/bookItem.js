import { bookItemFetchInStart } from "../operations/bookItem";

export const bookItemExtraReducer = {
  [bookItemFetchInStart.pending]: (state) => {
    state.loading = true;
  },
  [bookItemFetchInStart.fulfilled]: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  [bookItemFetchInStart.rejected]: (state) => {
    state.loading = false;
    state.error = true;
  },
};
