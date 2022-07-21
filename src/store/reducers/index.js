import { combineReducers } from "redux";

import { books } from "../../pages/Books/reducers/books";
import { bookItem } from "../../pages/BooksItem/reducers/bookItem";
import { statistics } from "../../pages/Statistics/reducers/statistics";
import { addBook } from "../../pages/Books/reducers/addBook";
import { deleteBook } from "../../pages/Books/reducers/deleteBook";
import { updateBook } from "../../pages/Books/reducers/updateBook";
import { pagination } from "../../components/Pagination/reducer/pagination";
import { modal } from "../modal/reducers/modal";

export default combineReducers({
  books,
  bookItem,
  statistics,
  addBook,
  deleteBook,
  updateBook,
  modal,
  pagination,
});
