import { createSelector } from "reselect";

const modalStateSelector = (state) => state.CREATEMODAL;

export const modalCreateBookOnShowSelector = createSelector(
  modalStateSelector,
  (modal) => modal.onShow
);
