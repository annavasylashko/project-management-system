import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import navigationItemSelector from "./NavigationItem.selector";
import Icon from "../../Icon/Icon";

import styles from "./NavigationItem.module.scss";

const NavigationItem = ({ task }) => {
  const { location } = useSelector(navigationItemSelector);
  const isActive = location === task.link;

  return (
    <Link
      to={`.${task.link}`}
      className={classNames(styles.link, {
        [styles.active]: isActive,
      })}
    >
      <Icon name={task.icon} className={styles["task-img"]} />
      <p>{task.title}</p>
    </Link>
  );
};

export default NavigationItem;
