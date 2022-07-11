import { put, call, takeLatest } from "redux-saga/effects";
import { getBooks } from "../../../api/books";
import { actions } from "../actions/books";
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
  yield takeLatest(actions.BOOKS_FETCH_START, booksFetchSaga);
}
