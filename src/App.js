import classNames from "classnames";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import ViewModeProvider from "./contexts/ViewMode/ViewMode.provider";
import { VIEW_MODES } from "./contexts/ViewMode/ViewMode.constants";
import { getViewMode } from "./contexts/ViewMode/ViewMode.utils";
import ContentPage from "./pages/ContentPage/ContentPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { AUTH_TYPES } from "./configs/auth";
import { CONTENT_ROUTES } from "./configs/routes";
import { tasksMap } from "./configs/tasks";

import styles from "./App.module.scss";

function App() {
  const isNavigationVisible = CONTENT_ROUTES.includes(window.location.pathname);

  const viewMode = getViewMode();
  const isWideView = viewMode === VIEW_MODES.WIDE;

  return (
    <Router>
      <ViewModeProvider>
        <div
          className={classNames(styles.container, {
            [styles["with-navigation"]]: isNavigationVisible,
            [styles["with-navigation-wide"]]: isNavigationVisible && isWideView,
          })}
        >
          {isNavigationVisible && <Navigation />}
          <Routes>
            <Route
              path="/login"
              element={<AuthPage type={AUTH_TYPES.LOGIN} />}
            />
            <Route
              path="/register"
              element={<AuthPage type={AUTH_TYPES.REGISTER} />}
            />
            <Route
              exact
              path="/"
              element={<ContentPage showHeader title="Dashboard" />}
            />
            {tasksMap.map((task) => (
              <Route
                key={task.link}
                path={task.link}
                element={<ContentPage title={task.title} />}
              />
            ))}
          </Routes>
        </div>
      </ViewModeProvider>
    </Router>
  );
}

export default App;
