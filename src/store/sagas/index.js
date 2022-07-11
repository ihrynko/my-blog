import { all, fork } from "redux-saga/effects";

import * as booksSagas from "../../pages/Books/sagasRTK";

const combinedBooksSagas = {
  ...booksSagas,
};

export default function* rootSaga() {
  yield all(Object.values(combinedBooksSagas).map((saga) => fork(saga)));
}
