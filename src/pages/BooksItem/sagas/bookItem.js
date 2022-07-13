import { put, takeLatest } from "redux-saga/effects";
import { bookItemFetchInStart } from "../operations/bookItem";
import { bookItemFetchStart } from "../slice/bookItem";

function* booksFetchSaga({ payload: { id } }) {
  try {
    yield put(bookItemFetchInStart.pending);
    yield put(bookItemFetchInStart(id));
  } catch {
    yield put(bookItemFetchInStart.rejected);
  }
}

export function* bookItemFetchWatcher() {
  yield takeLatest(bookItemFetchStart.type, booksFetchSaga);
}
