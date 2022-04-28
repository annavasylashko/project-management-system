import React from "react";

import styles from "./Info.module.scss";

const Info = ({ isLogin }) => (
  <>
    <h1 className={styles.slogan}>
      {isLogin
        ? "Transforming paperwork into work"
        : "Become a member of our community"}
    </h1>
    {isLogin && <p className={styles.welcome}>Welcome back!</p>}
  </>
);

export default Info;
