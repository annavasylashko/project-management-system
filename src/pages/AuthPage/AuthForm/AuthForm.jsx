import PropTypes from "prop-types";
import React, { useCallback, useMemo } from "react";

import Input from "../../../components/Input/Input";
import { useInputHandlers } from "../../../shared/hooks/useInputHandler";
import { login, register } from "../../../shared/utils/requests";
import { loginTips, passwordTips } from "./AuthForm.constants";
import styles from "./AuthForm.module.scss";

const propTypes = {
  isLogin: PropTypes.bool,
};

const defaultProps = {
  isLogin: false,
};

const AuthForm = ({ isLogin }) => {
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
    <>
      <p className={styles["form-name"]}>
        {isLogin ? "Log in to continue" : "Start right now!"}
      </p>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          name="username"
          className={styles.username}
          placeholder="Enter your username"
          value={inputs.username.value}
          inputHandler={inputHandler}
          autoComplete="current-username"
        />
        {!isLogin && (
          <p className={styles.tips}>
            {loginTips}
          </p>)
        }
        <Input
          name="password"
          className={styles.password}
          type="password"
          placeholder="Enter your password"
          value={inputs.password.value}
          inputHandler={inputHandler}
          autoComplete="current-password"
        />
        {!isLogin && (
          <p className={styles.tips}>
            {passwordTips}
          </p>)
        }
        <button type="submit" className={styles["submit-button"]}>
          {isLogin ? "Log in" : "Sign up"}
        </button>
      </form>
    </>
  );
};

AuthForm.propTypes = propTypes;
AuthForm.defaultProps = defaultProps;

export default AuthForm;
