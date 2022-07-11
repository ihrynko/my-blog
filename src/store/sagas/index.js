import { all, fork } from "redux-saga/effects";

import * as booksSagas from "../../pages/Books/sagasRTK";
import * as bookItemSagas from "../../pages/BooksItem/sagasRTK";
import * as statisticsSagas from "../../pages/Statistics/sagasRTK";

const BooksSagas = {
  ...booksSagas,
};

const BookItemSagas = {
  ...bookItemSagas,
};

const StatisticsSagas = {
  ...statisticsSagas,
};

export default function* rootSaga() {
  yield all(Object.values(BooksSagas).map((saga) => fork(saga)));
  yield all(Object.values(BookItemSagas).map((saga) => fork(saga)));
  yield all(Object.values(StatisticsSagas).map((saga) => fork(saga)));
}
