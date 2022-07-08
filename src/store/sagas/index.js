import { all, fork } from "redux-saga/effects";

import * as booksSagas from "../../pages/Books/sagas";
import * as bookItemSagas from "../../pages/BooksItem/sagas";

const combineddSagas = {
  ...booksSagas,
};
const combinedSagas = {
  ...bookItemSagas,
};
console.log(combineddSagas);
console.log(combinedSagas);

export default function* rootSaga() {
  yield Object.values(combineddSagas).map((saga) => fork(saga));
  yield Object.values(combinedSagas).map((saga) => fork(saga));
}
