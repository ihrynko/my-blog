import { statisticsFetchStart } from "../operations/statistics";

export const statisticsExtraReducer = {
  [statisticsFetchStart.pending]: (state, action) => {
    state.loading = true;
  },
  [statisticsFetchStart.fulfilled]: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  [statisticsFetchStart.rejected]: (state, action) => {
    state.loading = false;
    state.error = true;
  },
};
