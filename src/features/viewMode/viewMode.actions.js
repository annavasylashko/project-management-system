import viewModeActionTypes from "./viewMode.actionTypes";

export const updateViewMode = (viewMode) => ({
  type: viewModeActionTypes.UPDATE_VIEW_MODE,
  payload: {
    viewMode,
  },
});
