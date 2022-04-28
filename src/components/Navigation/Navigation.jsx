import React from "react";

import { tasksMap } from "../../configs/tasks";
import NavigationItem from "./NavigationItem/NavigationItem";
import LogOutItem from "./LogOutItem/LogOutItem";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const dashboard = [
    {
      link: "/",
      icon: "iconDashboard",
      title: "Dashboard",
    },
  ];
  const navigationMap = dashboard.concat(tasksMap);

  return (
    <div className={styles.navigation}>
      <h2 className={styles.logo}>Projecto</h2>
      <div className={styles.items}>
        {navigationMap.map((task) => (
          <NavigationItem key={task.link} task={task} />
        ))}
      </div>
      <LogOutItem />
    </div>
  );
};

export default Navigation;
