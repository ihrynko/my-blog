import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { booksReducer } from "../pages/Books/slice/books";
import { bookItemReducer } from "../pages/BooksItem/slice/bookItem";
import { statisticsReducer } from "../pages/Statistics/slice/statistics";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    BOOKS: booksReducer,
    BOOKITEM: bookItemReducer,
    STATISTICS: statisticsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
