import { put, takeLatest } from "redux-saga/effects";
import { booksFetchStart } from "../slice/statistics";
import { statisticsFetchStart } from "../operations/statistics";

function* booksFetchSaga() {
  try {
    yield put(statisticsFetchStart.pending);
    yield put(statisticsFetchStart());
  } catch {
    yield put(statisticsFetchStart.rejected);
  }
}

export function* statisticsFetchWatcher() {
  yield takeLatest(booksFetchStart.type, booksFetchSaga);
}
