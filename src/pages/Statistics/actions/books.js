import {
  BOOKS_FETCH_START,
  BOOKS_FETCH_ERROR,
  BOOKS_FETCH_IN_PROGRESS,
  BOOKS_FETCH_SUCCESS,
} from "../action-types/books";

export const bookFetchInStart = () => ({
  type: BOOKS_FETCH_START,
});

export const bookFetchInProgress = () => ({
  type: BOOKS_FETCH_IN_PROGRESS,
});

export const bookFetchSuccess = (data) => ({
  type: BOOKS_FETCH_SUCCESS,
  payload: { data },
});

export const bookFetchError = (error) => ({
  type: BOOKS_FETCH_ERROR,
  payload: { error },
});
