import {
  STATISTICS_FETCH_START,
  STATISTICS_FETCH_ERROR,
  STATISTICS_FETCH_IN_PROGRESS,
  STATISTICS_FETCH_SUCCESS,
} from "../action-types/books";

export const bookFetchInStart = () => ({
  type: STATISTICS_FETCH_START,
});

export const bookFetchInProgress = () => ({
  type: STATISTICS_FETCH_IN_PROGRESS,
});

export const bookFetchSuccess = (data) => ({
  type: STATISTICS_FETCH_SUCCESS,
  payload: { data },
});

export const bookFetchError = (error) => ({
  type: STATISTICS_FETCH_ERROR,
  payload: { error },
});
