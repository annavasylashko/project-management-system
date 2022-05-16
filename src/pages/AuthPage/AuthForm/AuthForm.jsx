import PropTypes from "prop-types";
import classNames from "classnames";
import React, { useCallback, useMemo } from "react";

import { VIEW_MODES } from "../../../contexts/ViewMode/ViewMode.constants";
import { useInputHandlers } from "../../../shared/hooks/useInputHandler";
import { login, register } from "../../../shared/utils/requests";

import { loginTips, passwordTips } from "./AuthForm.constants";

import styles from "./AuthForm.module.scss";

const propTypes = {
  isLogin: PropTypes.bool,
  isWideView: PropTypes.oneOf([VIEW_MODES.SIMPLE, VIEW_MODES.WIDE]).isRequired,
};

const defaultProps = {
  isLogin: false,
};

const AuthForm = ({ isLogin, isWideView }) => {
  const initialInputs = useMemo(
    () => ({
      username: {
        name: "username",
        value: "",
        error: "",
      },
      password: {
        name: "password",
        value: "",
        error: "",
      },
    }),
    []
  );
  const { inputs, setInputs, inputHandler } = useInputHandlers(initialInputs);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const user = {
        username: inputs.username.value,
        password: inputs.password.value,
      };
      isLogin ? login(user) : register(user);

      setInputs({ ...initialInputs });
    },
    [inputs, isLogin, initialInputs]
  );

  return (
    <div
      className={classNames(styles["form-container"], {
        [styles["form-container-wide"]]: isWideView,
      })}
    >
      <p className={styles["form-name"]}>
        {isLogin ? "Log in to continue" : "Start right now!"}
      </p>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          name="username"
          className={styles.username}
          type="text"
          placeholder="Enter your username"
          value={inputs.username.value}
          onChange={inputHandler}
          autoComplete="current-username"
        />
        {!isLogin && <p className={styles.tips}>{loginTips}</p>}
        <input
          name="password"
          className={styles.password}
          type="password"
          placeholder="Enter your password"
          value={inputs.password.value}
          onChange={inputHandler}
          autoComplete="current-password"
        />
        {!isLogin && <p className={styles.tips}>{passwordTips}</p>}
        <button type="submit" className={styles["submit-button"]}>
          {isLogin ? "Log in" : "Sign up"}
        </button>
      </form>
    </div>
  );
};

AuthForm.propTypes = propTypes;
AuthForm.defaultProps = defaultProps;

export default AuthForm;
