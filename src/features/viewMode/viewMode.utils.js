import { VIEW_MODES, wideViewThreshold } from "./viewMode.constants";

export const getViewMode = () =>
  window.innerWidth < wideViewThreshold ? VIEW_MODES.SIMPLE : VIEW_MODES.WIDE;
