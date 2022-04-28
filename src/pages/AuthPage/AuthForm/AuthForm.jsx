import React, { useCallback, useState, useMemo } from "react";

import { login, register } from "../../../shared/utils/requests";

import styles from "./AuthForm.module.scss";

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
  const [inputs, setInputs] = useState({ ...initialInputs });

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInputs((state) => ({
      ...state,
      [name]: {
        ...state[name],
        value: value,
        error: "",
      },
    }));
  };

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
        <input
          name="username"
          className={styles.username}
          type="text"
          placeholder="Enter your username"
          value={inputs.username.value}
          onChange={inputHandler}
          autoComplete="current-username"
        />
        <input
          name="password"
          className={styles.password}
          type="password"
          placeholder="Enter your password"
          value={inputs.password.value}
          onChange={inputHandler}
          autoComplete="current-password"
        />
        <button type="submit" className={styles["submit-button"]}>
          {isLogin ? "Log in" : "Sign up"}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
