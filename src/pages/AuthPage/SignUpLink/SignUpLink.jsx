import React from "react";

import styles from "./SignUpLink.module.scss";

const SignUpLink = () => {
  return (
    <p className={styles["sign-up-link"]}>
      Don&apos;t have an account?
      <a href="/register"> Sign up here</a>
    </p>
  );
};

export default SignUpLink;
