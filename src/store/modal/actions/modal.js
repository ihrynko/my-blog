export const modalOpenToggle = (state, action) => {
  state.onShow = !state.onShow;
  state.name = action.payload?.name;
};
