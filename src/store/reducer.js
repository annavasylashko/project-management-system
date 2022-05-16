import { combineReducers } from "redux";

import navigationReducer from "../features/navigation/navigation.reducers";
import viewModeReducer from "../features/viewMode/viewMode.reducer";

export const reducer = combineReducers({
  location: navigationReducer,
  viewMode: viewModeReducer,
});
