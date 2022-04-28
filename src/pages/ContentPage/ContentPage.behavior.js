import { updateLocation } from "../../features/navigation/navigation.actions";

const updateLocationPath = (dispatch) => (location) => {
  dispatch(updateLocation(location));
};

const contentPageBehavior = {
  updateLocationPath,
};

export default contentPageBehavior;
