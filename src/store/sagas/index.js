import { all, fork } from "redux-saga/effects";

import { booksFetchWatcher } from "../../pages/Books/sagas";
import { bookItemFetchWatcher } from "../../pages/BooksItem/sagas";
import { statisticsFetchWatcher } from "../../pages/Statistics/sagas";

const combinedSagas = {
  booksSagas: booksFetchWatcher,
  bookItemSagas: bookItemFetchWatcher,
  statisticsSagas: statisticsFetchWatcher,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
