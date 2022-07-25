import { createSelector } from "reselect";

const bookCreateStateSelector = (state) => state.bookList.createBook;

export const bookCreateLoadingSelector = createSelector(
  bookCreateStateSelector,
  (book) => book.loading
);

export const bookCreateDataSelector = createSelector(
  bookCreateStateSelector,
  (book) => book.data
);

export const bookCreateErrorSelector = createSelector(
  bookCreateStateSelector,
  (book) => book.error
);
