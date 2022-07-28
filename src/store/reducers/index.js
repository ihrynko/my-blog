import { combineReducers } from "redux";

import { books } from "../../pages/Books/reducers/books";
import { bookItem } from "../../pages/BooksItem/reducers/bookItem";
import { statistics } from "../../pages/Statistics/reducers/statistics";
import { createBook } from "../../pages/Books/reducers/createBook";
import { deleteBook } from "../../pages/Books/reducers/deleteBook";
import { updateBook } from "../../pages/Books/reducers/updateBook";
import { pagination } from "../pagination/reducer/pagination";
import { modal } from "../modal/reducers/modal";

const bookList = combineReducers({
  books,
  createBook,
  deleteBook,
  updateBook,
});

export default combineReducers({
  bookList,
  bookItem,
  statistics,
  modal,
  pagination,
});
