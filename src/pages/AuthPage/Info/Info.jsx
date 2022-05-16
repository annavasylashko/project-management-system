import PropTypes from "prop-types";
import classNames from "classnames";
import React from "react";

import { VIEW_MODES } from "../../../contexts/ViewMode/ViewMode.constants";

import styles from "./Info.module.scss";

const propTypes = {
  isLogin: PropTypes.bool,
  isWideView: PropTypes.oneOf([VIEW_MODES.SIMPLE, VIEW_MODES.WIDE]).isRequired,
};

const defaultProps = {
  isLogin: false,
};

const Info = ({ isLogin, isWideView }) => (
  <div
    className={classNames(styles.info, {
      [styles["info-wide"]]: isWideView,
    })}
  >
    <h1 className={styles.slogan}>
      {isLogin
        ? "Transforming paperwork into work"
        : "Become a member of our community"}
    </h1>
    {isLogin && <p className={styles.welcome}>Welcome back!</p>}
  </div>
);

Info.propTypes = propTypes;
Info.defaultProps = defaultProps;

export default Info;
