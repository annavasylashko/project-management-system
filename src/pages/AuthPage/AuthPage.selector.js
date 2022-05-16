import { createStructuredSelector } from "reselect";

import { viewModeSelector } from "../../features/viewMode/viewMode.selector";

const authPageSelector = createStructuredSelector({
  viewMode: viewModeSelector,
});

export default authPageSelector;
