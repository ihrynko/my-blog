import { all, fork } from "redux-saga/effects";

import { booksFetchWatcher } from "../../pages/Books/sagas";
import { addBookWatcher } from "../../pages/Books/Modal/sagas";
import { deleteBookFetchWatcher } from "../../pages/Books/Modal/sagas";
import { updateBookWatcher } from "../../pages/Books/Modal/sagas";
import { bookItemFetchWatcher } from "../../pages/BooksItem/sagas";
import { statisticsFetchWatcher } from "../../pages/Statistics/sagas";

const combinedSagas = {
  booksSagas: booksFetchWatcher,
  addBookSagas: addBookWatcher,
  deleteBookSaga: deleteBookFetchWatcher,
  updateBookSafa: updateBookWatcher,
  bookItemSagas: bookItemFetchWatcher,
  statisticsSagas: statisticsFetchWatcher,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
