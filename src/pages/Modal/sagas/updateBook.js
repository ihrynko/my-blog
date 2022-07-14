import { put, takeLatest } from "redux-saga/effects";
import { updateBookFetchStart } from "../slice/modal";
import { updateFunctionStart } from "../operations/modal";

function* updateBookSaga({ payload }) {
  try {
    yield put(updateFunctionStart.pending);
    yield put(updateBookFetchStart(payload));
  } catch {
    yield put(updateFunctionStart.rejected);
  }
}

export function* updateBookWatcher() {
  yield takeLatest(updateBookFetchStart.type, updateBookSaga);
}
