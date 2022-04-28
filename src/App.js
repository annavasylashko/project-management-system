import classNames from "classnames";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import ContentPage from "./pages/ContentPage/ContentPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { AUTH_TYPES } from "./configs/auth";
import { CONTENT_ROUTES } from "./configs/routes";
import { tasksMap } from "./configs/tasks";

import styles from "./App.module.scss";

function App() {
  const isNavigationVisible = CONTENT_ROUTES.includes(window.location.pathname);

  return (
    <Router>
      <div
        className={classNames(styles.container, {
          [styles["with-navigation"]]: isNavigationVisible,
        })}
      >
        {isNavigationVisible && <Navigation />}
        <Routes>
          <Route path="/login" element={<AuthPage type={AUTH_TYPES.LOGIN} />} />
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
    </Router>
  );
}

export default App;
