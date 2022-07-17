import { createSelector } from "reselect";

const modalStateSelector = (state) => state.MODAL;

export const modalOnShowSelector = createSelector(
  modalStateSelector,
  (modal) => modal.onShow
);
