import { createSelector } from "reselect";

const crudStateSelector = (state) => state.CRUD;

export const crudLoadingSelector = createSelector(
  crudStateSelector,
  (crud) => crud.loading
);

// export const crudDataSelector = createSelector(
//   crudStateSelector,
//   (modal) => modal.data
// );

export const crudErrorSelector = createSelector(
  crudStateSelector,
  (modal) => modal.error
);
