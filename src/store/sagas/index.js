import { all, fork } from "redux-saga/effects";

import * as booksSagas from "../../pages/Books/sagas";
import * as bookItemSagas from "../../pages/BooksItem/sagas";
import * as statisticsSagas from "../../pages/Statistics/sagas";

const BooksSaga = {
  ...booksSagas,
};
const BookItemSaga = {
  ...bookItemSagas,
};

const StatisticsSaga = {
  ...statisticsSagas,
};

export default function* rootSaga() {
  yield all(Object.values(BooksSaga).map((saga) => fork(saga)));
  yield all(Object.values(BookItemSaga).map((saga) => fork(saga)));
  yield all(Object.values(StatisticsSaga).map((saga) => fork(saga)));
}
