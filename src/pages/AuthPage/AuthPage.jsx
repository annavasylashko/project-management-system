/* eslint-disable no-undef */
import PropTypes from "prop-types";
import classNames from "classnames";
import React from "react";

import SignUpLink from "./SignUpLink/SignUpLink";
import AuthForm from "./AuthForm/AuthForm";
import Info from "./Info/Info";
import { AUTH_TYPES } from "../../configs/auth";
import { VIEW_MODES } from "../../contexts/ViewMode/ViewMode.constants";
import { useViewModeContext } from "../../contexts/ViewMode/ViewMode.context";

import styles from "./AuthPage.module.scss";

const propTypes = {
  type: PropTypes.oneOf([AUTH_TYPES.LOGIN, AUTH_TYPES.REGISTER]).isRequired,
};

const AuthPage = ({ type }) => {
  const { viewMode } = useViewModeContext();
  const isWideView = viewMode === VIEW_MODES.WIDE;
  const isLogin = type === AUTH_TYPES.LOGIN;

  return (
    <div
      className={classNames(styles.container, {
        [styles["container-wide"]]: isWideView,
      })}
    >
      <div className={styles.main}>
        <Info isLogin={isLogin} isWideView={isWideView} />
        <AuthForm isLogin={isLogin} />
        {isLogin && <SignUpLink />}
      </div>
      {isWideView && (
        <img
          src={require("./StartPic.png")}
          alt="StartPic"
          className={styles["start-pic"]}
        />
      )}
    </div>
  );
};

AuthPage.propTypes = propTypes;

export default AuthPage;
