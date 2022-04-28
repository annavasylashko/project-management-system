import { createStructuredSelector } from "reselect";

import { locationSelector } from "../../../features/navigation/navigation.selectors";

const navigationItemSelector = createStructuredSelector({
  location: locationSelector,
});

export default navigationItemSelector;
