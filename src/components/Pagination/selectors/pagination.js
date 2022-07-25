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
  ({ pagination, bookList }) => {
    const { itemsPerPage, currentPage } = pagination;
    const indexOfLastBook = itemsPerPage * currentPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;

    return bookList.books.data.slice(indexOfFirstBook, indexOfLastBook);
  }
);
