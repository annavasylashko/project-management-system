import createReducer from "../../shared/utils/createReducer";
import navigationActionTypes from "./navigation.actionTypes";

const initialState = {
  location: undefined,
};

const navigationReducer = createReducer(
  initialState,
  navigationActionTypes.UPDATE_LOCATION
)((_, action) =>
  ({
    [navigationActionTypes.UPDATE_LOCATION]: ({ location }) => location,
  }[action.type](action.payload))
);

export default navigationReducer;
