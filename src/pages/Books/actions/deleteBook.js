import { initialState } from "../reducers/deleteBook";

export const bookDeleteItemDataSet = (state, action) => {
  state.data = action.payload;
};

export const bookDeleteInProgress = (state) => {
  state.loading = true;
  state.error = false;
};
export const bookDeleteSuccess = (state) => {
  state.loading = false;
};
export const bookDeleteError = (state) => {
  state.loading = false;
  state.error = true;
};

export const deleteBookModalReset = (state) => {
  return (state = initialState);
};