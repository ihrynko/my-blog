import { all, fork } from "redux-saga/effects";

import * as booksSagas from "../../pages/Books/sagas";
import * as bookItemSagas from "../../pages/BooksItem/sagas";

const combinedBooksSagas = {
  ...booksSagas,
};
const combinedBookItemSagas = {
  ...bookItemSagas,
};

export default function* rootSaga() {
  yield all(Object.values(combinedBooksSagas).map((saga) => fork(saga)));
  yield all(Object.values(combinedBookItemSagas).map((saga) => fork(saga)));
}
