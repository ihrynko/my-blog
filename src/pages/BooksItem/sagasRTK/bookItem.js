import { put, call, takeLatest } from "redux-saga/effects";
import { getBookItem } from "../../../api/books";
import {
  bookItemFetchStart,
  bookItemInProgress,
  bookItemFetchSuccess,
  bookItemFetchError,
} from "../reducersRTK/bookItem";

function* booksFetchSaga({ payload: { id } }) {
  try {
    yield put(bookItemInProgress());
    const data = yield call(getBookItem, id);
    yield put(bookItemFetchSuccess({ data }));
  } catch (error) {
    yield put(bookItemFetchError(error));
  }
}

export function* bookFetchWatcher() {
  yield takeLatest(bookItemFetchStart, booksFetchSaga);
}
