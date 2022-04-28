/* eslint-disable no-undef */
import PropTypes from "prop-types";
import React from "react";

import SignUpLink from "./SignUpLink/SignUpLink";
import AuthForm from "./AuthForm/AuthForm";
import Info from "./Info/Info";
import { AUTH_TYPES } from "../../configs/auth";

import styles from "./AuthPage.module.scss";

const propTypes = {
  type: PropTypes.oneOf([AUTH_TYPES.LOGIN, AUTH_TYPES.REGISTER]).isRequired,
};

const AuthPage = ({ type }) => {
  const isLogin = type === AUTH_TYPES.LOGIN;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Info isLogin={isLogin} />
        <AuthForm isLogin={isLogin} />
        {isLogin && <SignUpLink />}
      </div>
      <img
        src={require("./StartPic.png")}
        alt="StartPic"
        className={styles["start-pic"]}
      />
    </div>
  );
};

AuthPage.propTypes = propTypes;

export default AuthPage;
