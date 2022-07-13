import { createSelector } from "reselect";

const booksStateSelector = (state) => state.STATISTICS;

export const booksLoadingSelector = createSelector(
  booksStateSelector,
  (statistics) => statistics.loading
);

export const booksDataSelector = createSelector(
  booksStateSelector,
  (statistics) => statistics.data
);

export const booksErrorSelector = createSelector(
  booksStateSelector,
  (statistics) => statistics.error
);
