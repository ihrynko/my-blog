import { put, call, takeLatest } from "redux-saga/effects";
import { getBooks } from "../../../api/books";
import { BOOKS_FETCH_START } from "../action-types/books";
import {
  booksInProgress,
  booksSuccess,
  booksError,
} from "../reducersRTK/books";

function* booksFetchSaga() {
  try {
    yield put(booksInProgress());
    const data = yield call(getBooks);
    yield put(booksSuccess(data));
  } catch (error) {
    yield put(booksError(error));
  }
}

export function* booksFetchWatcher() {
  yield takeLatest(BOOKS_FETCH_START, booksFetchSaga);
}
