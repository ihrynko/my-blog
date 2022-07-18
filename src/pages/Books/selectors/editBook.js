import { createSelector } from "reselect";

const editBookStateSelector = (state) => state.EDITBOOK;

export const editBookLoadingSelector = createSelector(
  editBookStateSelector,
  (book) => book.loading
);

export const editBookDataSelector = createSelector(
  editBookStateSelector,
  (book) => book.data
);

export const editBookErrorSelector = createSelector(
  editBookStateSelector,
  (book) => book.error
);
