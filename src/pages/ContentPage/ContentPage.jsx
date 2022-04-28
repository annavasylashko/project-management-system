import PropTypes from "prop-types";
import React, { useEffect } from "react";

import AddTask from "../../components/AddTask/AddTask";
import UserHeader from "../../components/UserHeader/UserHeader";
import Dashboard from "../../components/Dashboard/Dashboard";
import useBehavior from "../../shared/hooks/useBehavior";
import contentPageBehavior from "./ContentPage.behavior";
import { tasksMap } from "../../configs/tasks";
import CardsProvider from "../../contexts/Cards/Cards.provider";

import styles from "./ContentPage.module.scss";

const propTypes = {
  showHeader: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  showHeader: false,
};

const ContentPage = ({ showHeader, title }) => {
  const { updateLocationPath } = useBehavior(contentPageBehavior);
  const isUserLoggedIn = localStorage.getItem("token");

  useEffect(() => {
    updateLocationPath(window.location.pathname);
  }, [updateLocationPath, window.location.pathname]);

  const filteredSections = tasksMap.filter((task) => task.title === title);

  if (!isUserLoggedIn) {
    window.location.href = "/login";
  }

  return (
    <CardsProvider>
      <div className={styles["main-section"]}>
        <UserHeader title={title} />
        <AddTask />
        <Dashboard
          showHeader={showHeader}
          sections={filteredSections.length > 0 ? filteredSections : tasksMap}
        />
      </div>
    </CardsProvider>
  );
};

ContentPage.propTypes = propTypes;
ContentPage.defaultProps = defaultProps;

export default ContentPage;
