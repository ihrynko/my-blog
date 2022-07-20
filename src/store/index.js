import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "../pages/Books/slice/books";
import { addBookReducer } from "../pages/Books/slice/addBook";
import { editBookReducer } from "../pages/Books/slice/editBook";
import { deleteBookReducer } from "../pages/Books/slice/deleteBook";
import { modalCreateReducer } from "../pages/Books/components/BookAddModal/redux/slice";
import { modalEditReducer } from "../pages/Books/components/BookEditModal/redux/slice";
import { bookItemReducer } from "../pages/BooksItem/slice/bookItem";
import { statisticsReducer } from "../pages/Statistics/slice/statistics";
import { paginationReducer } from "../components/Pagination/slice/pagination";

const store = configureStore({
  reducer: {
    BOOKS: booksReducer,
    BOOKITEM: bookItemReducer,
    STATISTICS: statisticsReducer,
    ADDBOOK: addBookReducer,
    EDITBOOK: editBookReducer,
    DELETEBOOK: deleteBookReducer,
    CREATEMODAL: modalCreateReducer,
    EDITMODAL: modalEditReducer,
    PAGINATION: paginationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
