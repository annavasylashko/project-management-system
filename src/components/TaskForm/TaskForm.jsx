import PropTypes from "prop-types";
import classNames from "classnames";
import React, { useMemo } from "react";

import Buttons from "./Buttons/Buttons";
import StatusOptions from "./StatusOptions/StatusOptions";
import { useViewModeContext } from "../../contexts/ViewMode/ViewMode.context";
import { VIEW_MODES } from "../../contexts/ViewMode/ViewMode.constants";
import { useInputHandlers } from "../../shared/hooks/useInputHandler";
import {
  createCard,
  updateCard,
  deleteCard,
} from "../../shared/utils/requests";
import { useCardsContext } from "../../contexts/Cards/Cards.context";

import styles from "./TaskForm.module.scss";

const propTypes = {
  onClose: PropTypes.func.isRequired,
  taskToEdit: PropTypes.object,
};

const defaultProps = {
  taskToEdit: {},
};

const TaskForm = ({ onClose, taskToEdit }) => {
  const { setShouldGetCards } = useCardsContext();
  const { viewMode } = useViewModeContext();
  const isSimpleView = viewMode === VIEW_MODES.SIMPLE;

  const isTaskEdited = JSON.stringify(taskToEdit) !== JSON.stringify({});

  const initialInputs = useMemo(
    () => ({
      "task-title": {
        name: "task-title",
        value: isTaskEdited ? taskToEdit.title : "",
        error: "",
      },
      description: {
        name: "description",
        value: isTaskEdited ? taskToEdit.description : "",
        error: "",
      },
      "status-option": {
        name: "status-option",
        value: isTaskEdited ? taskToEdit.status : "",
        error: "",
      },
    }),
    [isTaskEdited, taskToEdit]
  );

  const { inputs, setInputs, inputHandler } = useInputHandlers(initialInputs);

  const handlers = () => {
    setInputs({ ...initialInputs });
    onClose();
    setShouldGetCards(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    isTaskEdited
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
    isTaskEdited && deleteCard(taskToEdit.id);
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
      <form
        action="#"
        className={classNames(styles["new-task"], {
          [styles["new-task-simple"]]: isSimpleView,
        })}
      >
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
          isEdited={isTaskEdited}
          deleteHandler={deleteHandler}
          submitHandler={submitHandler}
        />
      </form>
    </>
  );
};

TaskForm.propTypes = propTypes;
TaskForm.defaultProps = defaultProps;

export default TaskForm;
