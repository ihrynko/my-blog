import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "../pages/Books/slice/books";
import { crudReducer } from "../pages/Books/Modal/slice/modal";
import { modalReducer } from "../components/Modal_redux/slice";
import { bookItemReducer } from "../pages/BooksItem/slice/bookItem";
import { statisticsReducer } from "../pages/Statistics/slice/statistics";

const store = configureStore({
  reducer: {
    BOOKS: booksReducer,
    CRUD: crudReducer,
    BOOKITEM: bookItemReducer,
    STATISTICS: statisticsReducer,
    MODAL: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
