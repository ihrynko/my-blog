export const modalOpenToggle = (state, action) => {
  state.open = !state.open;
  state.name = action.payload?.name;
};
