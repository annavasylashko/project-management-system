import navigationActionTypes from "./navigation.actionTypes";

export const updateLocation = (location) => ({
  type: navigationActionTypes.UPDATE_LOCATION,
  payload: { location },
});
