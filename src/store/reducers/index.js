import { combineReducers } from "redux";
import bookItemReducer from "../../pages/BooksItem/reducers/bookItem";
import bookReducer from "../../pages/Books/reducers/books";
import statisticsReducer from "../../pages/Statistics/reducers/books";

export default combineReducers({
  bookItem: bookItemReducer,
  books: bookReducer,
  statistics: statisticsReducer,
});
