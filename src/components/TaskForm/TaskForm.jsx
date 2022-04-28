import React, { useState } from "react";

import Buttons from "./Buttons/Buttons";
import StatusOptions from "./StatusOptions/StatusOptions";
import {
  createCard,
  updateCard,
  deleteCard,
} from "../../shared/utils/requests";
import { useCardsContext } from "../../contexts/Cards/Cards.context";

import styles from "./TaskForm.module.scss";

const TaskForm = ({ onClose, taskToEdit }) => {
  const { setShouldGetCards } = useCardsContext();

  const initialInputs = {
    "task-title": {
      name: "task-title",
      value: taskToEdit ? taskToEdit.title : "",
      error: "",
    },
    description: {
      name: "description",
      value: taskToEdit ? taskToEdit.description : "",
      error: "",
    },
    "status-option": {
      name: "status-option",
      value: taskToEdit ? taskToEdit.status : "",
      error: "",
    },
  };
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

  const handlers = () => {
    setInputs({ ...initialInputs });
    onClose();
    setShouldGetCards(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    taskToEdit
      ? updateCard({
          id: taskToEdit.id,
          title: inputs["task-title"].value,
          status: inputs["status-option"].value,
          description: inputs.description.value,
        })
      : createCard({
          title: inputs["task-title"].value,
          status: inputs["status-option"].value,
          description: inputs.description.value,
        });
    handlers();
  };

  const deleteHandler = () => {
    taskToEdit && deleteCard(taskToEdit.id);
    handlers();
  };

  return (
    <>
      <div
        className={styles.blocker}
        role="button"
        tabIndex="0"
        onClick={onClose}
      />
      <form action="#" className={styles["new-task"]}>
        <input
          name="task-title"
          type="text"
          className={styles["new-task-name"]}
          placeholder="Add new task"
          onChange={inputHandler}
          value={inputs["task-title"].value}
        />
        <textarea
          name="description"
          className={styles["new-task-content"]}
          cols="30"
          rows="10"
          placeholder="Add description"
          onChange={inputHandler}
          value={inputs.description.value}
        />
        <StatusOptions
          selectedStatus={inputs["status-option"].value}
          handler={inputHandler}
        />
        <Buttons
          isEdited={!!taskToEdit}
          deleteHandler={deleteHandler}
          submitHandler={submitHandler}
        />
      </form>
    </>
  );
};

export default TaskForm;
