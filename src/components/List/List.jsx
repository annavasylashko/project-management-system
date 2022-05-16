import PropTypes from "prop-types";
import classNames from "classnames";
import React from "react";

import Card from "../Card/Card";
import { useViewModeContext } from "../../contexts/ViewMode/ViewMode.context";
import { VIEW_MODES } from "../../contexts/ViewMode/ViewMode.constants";

import styles from "./List.module.scss";

const propTypes = {
  showHeader: PropTypes.bool,
  cards: PropTypes.array.isRequired,
  isExpanded: PropTypes.bool,
};

const defaultProps = {
  showHeader: false,
  isExpanded: true,
};

const List = ({ showHeader, cards, isExpanded }) => {
  const { viewMode } = useViewModeContext();
  const isSimpleView = viewMode === VIEW_MODES.SIMPLE;

  if (!isExpanded) {
    return null;
  }

  return (
    <div
      className={classNames(styles["list-container"], {
        [styles["list-container-dashboard"]]: showHeader,
        [styles["list-container-simple"]]: isSimpleView,
      })}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          status={card.status}
        />
      ))}
    </div>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
