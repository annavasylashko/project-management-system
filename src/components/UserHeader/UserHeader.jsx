import React from "react";

import styles from "./UserHeader.module.scss";

const UserHeader = ({ title }) => {
  const username = window.localStorage.getItem("username");

  return (
    <div className={styles.header}>
      <h2 className={styles["section-title"]}>{title}</h2>
      <div className={styles["user-represent"]}>
        <p className={styles["user-name"]}>{`Hi, ${username}!`}</p>
        <div className={styles.avatar}>
          <p>{username[0].toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
