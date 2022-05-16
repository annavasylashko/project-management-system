import PropTypes from "prop-types";
import classNames from "classnames";
import React from "react";

import { tasksMap } from "../../../configs/tasks";
import NavigationItem from "../NavigationItem/NavigationItem";
import LogOutItem from "..//LogOutItem/LogOutItem";
import { VIEW_MODES } from "../../../contexts/ViewMode/ViewMode.constants";
import { useViewModeContext } from "../../../contexts/ViewMode/ViewMode.context";

import styles from "./NavigationMenu.module.scss";

const propTypes = {
  closeMenu: PropTypes.func,
};

const defaultProps = {
  closeMenu: () => {},
};

const NavigationMenu = ({ closeMenu }) => {
  const { viewMode } = useViewModeContext();
  const isSimpleView = viewMode === VIEW_MODES.SIMPLE;

  const dashboard = [
    {
      link: "/",
      icon: "iconDashboard",
      title: "Dashboard",
    },
  ];
  const navigationMap = dashboard.concat(tasksMap);

  return (
    <div
      className={classNames(styles.navigation, {
        [styles["navigation-simple"]]: isSimpleView,
      })}
    >
      <div className={styles.items}>
        {navigationMap.map((task) => (
          <NavigationItem key={task.link} task={task} closeMenu={closeMenu} />
        ))}
      </div>
      <LogOutItem />
    </div>
  );
};

NavigationMenu.propTypes = propTypes;
NavigationMenu.defaultProps = defaultProps;

export default NavigationMenu;
