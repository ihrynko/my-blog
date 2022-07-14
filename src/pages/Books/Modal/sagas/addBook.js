import { put, takeLatest } from "redux-saga/effects";
import { addBookFetchStart } from "../slice/modal";
import { addFunctionStart } from "../operations/modal";

function* addBookSaga({ payload }) {
  try {
    yield put(addFunctionStart.pending);
    yield put(addBookFetchStart(payload));
  } catch {
    yield put(addFunctionStart.rejected);
  }
}

export function* addBookWatcher() {
  yield takeLatest(addBookFetchStart.type, addBookSaga);
}
