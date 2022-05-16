import PropTypes from "prop-types";
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import navigationItemSelector from "./NavigationItem.selector";
import Icon from "../../Icon/Icon";

import styles from "./NavigationItem.module.scss";

const propTypes = {
  task: PropTypes.object.isRequired,
  closeMenu: PropTypes.func,
};

const defaultProps = {
  closeMenu: () => {},
};

const NavigationItem = ({ task, closeMenu }) => {
  const { location } = useSelector(navigationItemSelector);
  const isActive = location === task.link;

  return (
    <Link
      to={`.${task.link}`}
      className={classNames(styles.link, {
        [styles.active]: isActive,
      })}
      onClick={closeMenu}
    >
      <Icon name={task.icon} className={styles["task-img"]} />
      <p>{task.title}</p>
    </Link>
  );
};

NavigationItem.propTypes = propTypes;
NavigationItem.defaultProps = defaultProps;

export default NavigationItem;
