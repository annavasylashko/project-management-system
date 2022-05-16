import { createContext, useContext } from "react";

const defaultValue = {
  viewMode: [],
};

const ViewModeContext = createContext(defaultValue);
ViewModeContext.displayName = "ViewModeContext";

export const useViewModeContext = () => useContext(ViewModeContext);

export default ViewModeContext;
