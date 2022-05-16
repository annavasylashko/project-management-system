import PropTypes from "prop-types";
import classNames from "classnames";
import React, { useCallback, useState } from "react";

import List from "../List/List";
import Icon from "../Icon/Icon";
import { useCardsContext } from "../../contexts/Cards/Cards.context";
import { useViewModeContext } from "../../contexts/ViewMode/ViewMode.context";
import { VIEW_MODES } from "../../contexts/ViewMode/ViewMode.constants";

import styles from "./Dashboard.module.scss";

const propTypes = {
  showHeader: PropTypes.bool,
  sections: PropTypes.array.isRequired,
};

const defaultProps = {
  showHeader: false,
};

const Dashboard = ({ showHeader, sections }) => {
  const { cards } = useCardsContext();
  const { viewMode } = useViewModeContext();
  const isSimpleView = viewMode === VIEW_MODES.SIMPLE;

  const [isExpanded, setIsExpanded] = useState(true);
  const openList = useCallback(() => setIsExpanded(true), []);
  const closeList = useCallback(() => setIsExpanded(false), []);

  return (
    <div
      className={classNames(styles["dashboard-content"], {
        [styles["dashboard-content-simple"]]: isSimpleView,
      })}
    >
      {sections.map((section) => {
        const filteredCards = cards.filter(
          (card) => card.status === section.link.split("/")[1]
        );

        return (
          <div key={section.title}>
            {showHeader && (
              <div className={styles["task-type-section"]}>
                <h2 className={styles["task-type-section-title"]}>
                  {section.title}:
                </h2>
                {isSimpleView && (
                  <div
                    onClick={isExpanded ? closeList : openList}
                    className={styles.arrow}
                  >
                    <Icon
                      name={isExpanded ? "arrowUp" : "arrowDown"}
                      className={styles.arrow}
                    />
                  </div>
                )}
              </div>
            )}
            <List
              showHeader={showHeader}
              cards={filteredCards}
              isExpanded={isExpanded}
            />
          </div>
        );
      })}
    </div>
  );
};

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;

export default Dashboard;
