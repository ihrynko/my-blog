import { createSelector } from "reselect";

const modalStateSelector = (state) => state.MODAL;

export const modalLoadingSelector = createSelector(
  modalStateSelector,
  (modal) => modal.loading
);

export const booksDataSelector = createSelector(
  modalStateSelector,
  (modal) => modal.data
);

export const booksErrorSelector = createSelector(
  modalStateSelector,
  (modal) => modal.error
);
