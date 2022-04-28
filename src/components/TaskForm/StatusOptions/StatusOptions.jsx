import PropTypes from "prop-types";
import React from "react";

import { tasksMap } from "../../../configs/tasks";

import styles from "./StatusOptions.module.scss";

const propTypes = {
  selectedStatus: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

const defaultProps = {
  selectedStatus: "",
};

const StatusOptions = ({ selectedStatus, handler }) => {
  return (
    <div className={styles["status-options"]}>
      {tasksMap.map((task) => {
        const formattedStatus = task.link.split("/")[1];
        const isChecked = selectedStatus && selectedStatus === formattedStatus;

        return (
          <p key={formattedStatus}>
            <input
              name="status-option"
              type="radio"
              id={`radio_${formattedStatus}`}
              value={formattedStatus}
              checked={isChecked}
              onChange={handler}
            />
            {task.title}
          </p>
        );
      })}
    </div>
  );
};

StatusOptions.propTypes = propTypes;
StatusOptions.defaultProps = defaultProps;

export default StatusOptions;
