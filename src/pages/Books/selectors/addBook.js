import { createSelector } from "reselect";

const addBookStateSelector = (state) => state.ADDBOOK;

export const addBookLoadingSelector = createSelector(
  addBookStateSelector,
  (book) => book.loading
);

export const addBookDataSelector = createSelector(
  addBookStateSelector,
  (book) => book.data
);

export const addBookErrorSelector = createSelector(
  addBookStateSelector,
  (book) => book.error
);
