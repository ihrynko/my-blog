import { put, takeLatest } from "redux-saga/effects";
import { booksFetchStart } from "../slice/books";
import { booksFetchInStart } from "../thunks/books";

function* booksFetchSaga() {
  try {
    yield put(booksFetchInStart.pending);
    yield put(booksFetchInStart());
  } catch {
    yield put(booksFetchInStart.rejected);
  }
}

export function* booksFetchWatcher() {
  yield takeLatest(booksFetchStart.type, booksFetchSaga);
}
