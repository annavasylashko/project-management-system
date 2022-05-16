import { VIEW_MODES, wideViewThreshold } from "./ViewMode.constants";

export const getViewMode = () =>
  window.innerWidth < wideViewThreshold ? VIEW_MODES.SIMPLE : VIEW_MODES.WIDE;
