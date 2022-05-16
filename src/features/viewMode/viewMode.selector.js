import { get } from "../../shared/utils/get";

import { getViewMode } from "./viewMode.utils";

const defaultViewMode = getViewMode();
export const viewModeSelector = (state) =>
  get(state, "viewMode.current", defaultViewMode);
