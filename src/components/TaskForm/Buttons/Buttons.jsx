import PropTypes from "prop-types";
import React from "react";

import Icon from "../../Icon/Icon";

import styles from "./Buttons.module.scss";

const propTypes = {
  isEdited: PropTypes.bool,
  submitHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

const defaultProps = {
  isEdited: false,
};

const Buttons = ({ submitHandler, deleteHandler, isEdited }) => (
  <div className={styles["new-note-btns"]}>
    <button
      type="submit"
      className={styles["submit-new-task"]}
      onClick={submitHandler}
    >
      {isEdited ? "Save changes" : "Add task"}
    </button>
    <button className={styles["new-task-close"]} onClick={deleteHandler}>
      {isEdited && <Icon name="trash" />}
      <p>{isEdited ? "Delete" : "Cancel"}</p>
    </button>
  </div>
);

Buttons.propTypes = propTypes;
Buttons.defaultProps = defaultProps;

export default Buttons;
