import { createSelector } from "reselect";

const booksStateSelector = (state) => state.bookList.books;

export const booksLoadingSelector = createSelector(
  booksStateSelector,
  (books) => books.loading
);

export const booksDataSelector = createSelector(
  booksStateSelector,
  (books) => books.data
);

export const booksErrorSelector = createSelector(
  booksStateSelector,
  (books) => books.error
);
