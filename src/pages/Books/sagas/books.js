import { put, call, takeLatest } from "redux-saga/effects";
import { getBooks } from "../../../api/books";
import { BOOKS_FETCH_START } from "../action-types/books";
import {
  bookFetchError,
  bookFetchInProgress,
  bookFetchSuccess,
} from "../actions/books";

function* bookFetchSaga() {
  try {
    yield put(bookFetchInProgress());
    const data = yield call(getBooks);
    yield put(bookFetchSuccess(data));
  } catch (error) {
    yield put(bookFetchError(error));
  }
}

export function* booksFetchWatcher() {
  yield takeLatest(BOOKS_FETCH_START, bookFetchSaga);
}
