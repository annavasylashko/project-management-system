import { combineReducers } from "redux";

import navigationReducer from "../features/navigation/navigation.reducers";

export const reducer = combineReducers({
  location: navigationReducer,
});
