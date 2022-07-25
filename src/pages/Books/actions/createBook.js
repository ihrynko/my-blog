import { initialState } from "../reducers/createBook";

export const bookCreateInProgress = (state) => {
  state.loading = true;
};
export const bookCreateSuccess = (state) => {
  state.loading = false;
};
export const bookCreateError = (state) => {
  state.loading = true;
};

export const bookCreateModalReset = (state) => {
  return (state = initialState);
};
