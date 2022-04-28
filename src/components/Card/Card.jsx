import PropTypes from "prop-types";
import classNames from "classnames";
import React, { useCallback, useState } from "react";

import TaskForm from "../TaskForm/TaskForm";

import styles from "./Card.module.scss";

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Card = ({ id, title, status, description }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = useCallback(() => setIsFormVisible(true), []);
  const closeForm = useCallback(() => setIsFormVisible(false), []);

  return (
    <>
      <div className={styles.card}>
        <div className={styles["card-header"]}>
          <span
            className={classNames(
              styles["card-name"],
              styles[`status-${status}`]
            )}
          >
            {title}
          </span>
          <button className={styles["card-options"]} onClick={openForm}>
            <div className={styles["card-options-dot"]} />
            <div className={styles["card-options-dot"]} />
            <div className={styles["card-options-dot"]} />
          </button>
        </div>
        <p className={styles["card-content"]}>{description}</p>
      </div>
      {isFormVisible && (
        <TaskForm
          onClose={closeForm}
          taskToEdit={{ title, status, description, id }}
        />
      )}
    </>
  );
};

Card.propTypes = propTypes;

export default Card;
