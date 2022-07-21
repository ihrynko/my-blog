import { createSelector } from "reselect";

const stateSelector = (state) => state;
const paginationStateSelector = (state) => state.pagination;

export const paginationCurrentPageSelector = createSelector(
  paginationStateSelector,
  (book) => book.currentPage
);

export const paginationItemsPerPageSelector = createSelector(
  paginationStateSelector,
  (book) => book.itemsPerPage
);

export const booksCurrentBooksSelector = createSelector(
  stateSelector,
  ({ pagination, books }) => {
    const { itemsPerPage, currentPage } = pagination;
    const indexOfLastBook = itemsPerPage * currentPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;

    return books.data.slice(indexOfFirstBook, indexOfLastBook);
  }
);
