import { createSelector } from "reselect";

const deleteBookStateSelector = (state) => state.deleteBook;

export const deleteBookLoadingSelector = createSelector(
  deleteBookStateSelector,
  (book) => book.loading
);

export const deleteBookDataSelector = createSelector(
  deleteBookStateSelector,
  (book) => book.data
);

export const deleteBookErrorSelector = createSelector(
  deleteBookStateSelector,
  (book) => book.error
);
