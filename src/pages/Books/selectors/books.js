import { createSelector } from "reselect";

const bookStateSelector = (state) => state.books;

export const bookLoadingSelector = createSelector(
  bookStateSelector,
  (book) => book.loading
);

export const bookDataSelector = createSelector(
  bookStateSelector,
  (book) => book.data
);

export const bookErrorSelector = createSelector(
  bookStateSelector,
  (book) => book.error
);
