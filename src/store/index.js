import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import rootSaga from "./sagas";
import { booksReducer } from "../pages/Books/reducersRTK/books";
import { bookItemReducer } from "../pages/BooksItem/reducersRTK/bookItem";
import { statisticsReducer } from "../pages/Statistics/reducersRTK/books";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    books: booksReducer,
    bookItem: bookItemReducer,
    statistics: statisticsReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
