import { initialState } from "../reducers/updateBook";

export const bookUpdateItemIdSet = (state, action) => {
  state.fetchData = action.payload;
};

export const bookUpdateInProgress = (state) => {
  state.loading = true;
  state.error = false;
};
export const bookUpdateSuccess = (state, action) => {
  state.loading = false;
};
export const bookUpdateError = (state) => {
  state.loading = false;
  state.error = true;
};

export const updateBookModalReset = (state) => {
  return (state = initialState);
};
