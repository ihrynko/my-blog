import { booksFetchInStart } from "../operations/books";

export const booksExtraReducer = {
  [booksFetchInStart.pending]: (state) => {
    state.loading = true;
  },
  [booksFetchInStart.fulfilled]: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  [booksFetchInStart.rejected]: (state) => {
    state.loading = false;
    state.error = true;
  },
};
