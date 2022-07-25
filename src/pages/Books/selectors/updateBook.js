import { createSelector } from "reselect";

const editBookStateSelector = (state) => state.bookList.updateBook;

export const editBookLoadingSelector = createSelector(
  editBookStateSelector,
  (book) => book.loading
);

export const editBookDataSelector = createSelector(
  editBookStateSelector,
  (book) => book.data
);
export const editBookFetchDataSelector = createSelector(
  editBookStateSelector,
  (book) => book.fetchData
);

export const editBookErrorSelector = createSelector(
  editBookStateSelector,
  (book) => book.error
);
