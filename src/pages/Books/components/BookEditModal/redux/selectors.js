import { createSelector } from "reselect";

const modalStateSelector = (state) => state.EDITMODAL;

export const modalEditBookOnShowSelector = createSelector(
  modalStateSelector,
  (modal) => modal.onShow
);
