import { initialState } from "../reducers/createBook";

export const bookCreateInProgress = (state) => {
  state.loading = true;
};
export const bookCreateSuccess = (state, action) => {
  state.loading = false;
  state.data = action.payload;
};
export const bookCreateError = (state) => {
  state.error = true;
};

export const bookCreateModalReset = (state) => {
  return (state = initialState);
};
