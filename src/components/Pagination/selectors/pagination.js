import { createSelector } from "reselect";

const stateSelector = (state) => state;
const paginationStateSelector = (state) => state.PAGINATION;

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
  ({ PAGINATION, BOOKS }) => {
    const { itemsPerPage, currentPage } = PAGINATION;
    const indexOfLastBook = itemsPerPage * currentPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;

    return BOOKS.data.slice(indexOfFirstBook, indexOfLastBook);
  }
);
