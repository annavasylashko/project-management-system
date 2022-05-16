import PropTypes from "prop-types";
import React, { useMemo } from "react";

import ViewModeContext from "./ViewMode.context";
import { getViewMode } from "./ViewMode.utils";

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

const ViewModeProvider = ({ children }) => {
  const viewMode = getViewMode();

  const value = useMemo(
    () => ({ viewMode, getViewMode }),
    [viewMode, getViewMode]
  );

  return (
    <ViewModeContext.Provider value={value}>
      {children}
    </ViewModeContext.Provider>
  );
};

ViewModeProvider.propTypes = propTypes;

export default ViewModeProvider;
