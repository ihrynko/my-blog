import { combineReducers } from "redux";
import bookItemReducer from "../../pages/BooksItem/reducers/bookItem";
import bookReducer from "../../pages/Books/reducers/books";

export default combineReducers({
  bookItem: bookItemReducer,
  books: bookReducer,
});
