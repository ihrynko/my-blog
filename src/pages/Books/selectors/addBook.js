import { createSelector } from "reselect";

const addBookStateSelector = (state) => state.ADDBOOK;

export const crudLoadingSelector = createSelector(
  addBookStateSelector,
  (book) => book.loading
);

export const crudDataSelector = createSelector(
  addBookStateSelector,
  (book) => book.data
);

export const crudErrorSelector = createSelector(
  addBookStateSelector,
  (book) => book.error
);
