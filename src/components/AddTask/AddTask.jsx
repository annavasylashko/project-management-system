import React, { useCallback, useState } from "react";

import TaskForm from "../TaskForm/TaskForm";

import Icon from "../Icon/Icon";

import styles from "./AddTask.module.scss";

const AddTask = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = useCallback(() => setIsFormVisible(true), []);
  const closeForm = useCallback(() => setIsFormVisible(false), []);

  return (
    <>
      <div className={styles["add-task-section"]}>
        <p>Add task</p>
        <button className={styles["add-task-button"]} onClick={openForm}>
          <Icon name="iconAddTask" />
        </button>
      </div>
      {isFormVisible && <TaskForm onClose={closeForm} />}
    </>
  );
};

export default AddTask;
