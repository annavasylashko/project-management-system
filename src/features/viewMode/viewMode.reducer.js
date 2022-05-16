import viewModeActionTypes from "./viewMode.actionTypes";
import { getViewMode } from "./viewMode.utils";
import createReducer from "../../shared/utils/createReducer";

const initialState = {
  current: getViewMode(),
};

const viewModeReducer = createReducer(initialState, [
  viewModeActionTypes.UPDATE_VIEW_MODE,
])((state, action) =>
  ({
    [viewModeActionTypes.UPDATE_VIEW_MODE]: ({ viewMode }) => ({
      ...state,
      current: viewMode,
    }),
  }[action.type](action.payload))
);

export default viewModeReducer;
