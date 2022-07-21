import { initialState } from "../reducers/addBook";

export const bookCreateInProgress = (state) => {
  state.loading = true;
};
export const bookCreateSuccess = (state) => {
  state.loading = false;
};
export const bookCreateError = (state) => {
  state.loading = true;
};

export const addBookModalReset = (state) => {
  return (state = initialState);
};