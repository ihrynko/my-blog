import { applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import rootSaga from "./sagas";
import { booksReducer } from "../pages/Books/reducersRTK/books";

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(sagaMiddleware)
//   // other store enhancers if any
// );

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
