import {
  BOOKS_FETCH_IN_PROGRESS,
  BOOKS_FETCH_SUCCESS,
  BOOKS_FETCH_ERROR,
} from "../action-types/books";

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_FETCH_IN_PROGRESS: {
      return { ...state, loading: true, error: null };
    }

    case BOOKS_FETCH_SUCCESS: {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }

    case BOOKS_FETCH_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default booksReducer;
