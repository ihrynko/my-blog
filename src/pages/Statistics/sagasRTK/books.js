import { put, call, takeLatest } from "redux-saga/effects";
import { getBooks } from "../../../api/books";
import {
  booksFetchStart,
  booksInProgress,
  booksSuccess,
  booksError,
} from "../reducersRTK/books";

function* booksFetchSaga() {
  try {
    yield put(booksInProgress());
    const data = yield call(getBooks);
    yield put(booksSuccess({ data }));
  } catch (error) {
    yield put(booksError(error));
  }
}

export function* booksFetchWatcher() {
  yield takeLatest(booksFetchStart, booksFetchSaga);
}
