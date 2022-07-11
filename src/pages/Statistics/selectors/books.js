import { createSelector } from "reselect";

const bookStateSelector = (state) => state.statistics;

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
