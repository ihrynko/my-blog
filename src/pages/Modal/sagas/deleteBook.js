import { put, takeLatest } from "redux-saga/effects";
import { deleteFunctionStart } from "../operations/modal";
import { deleteBookFetchStart } from "../slice/modal";

function* booksFetchSaga({ payload }) {
  try {
    yield put(deleteFunctionStart.pending);
    yield put(deleteBookFetchStart(payload));
  } catch {
    yield put(deleteFunctionStart.rejected);
  }
}

export function* deleteBookFetchWatcher() {
  yield takeLatest(deleteBookFetchStart.type, booksFetchSaga);
}
