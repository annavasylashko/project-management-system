import React from "react";

import Icon from "../../Icon/Icon";

import styles from "./LogOutItem.module.scss";

const LogOutItem = () => {
  const onClick = () => {
    window.localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <Icon name="iconLogOut" className={styles.icon} />
    </div>
  );
};

export default LogOutItem;
