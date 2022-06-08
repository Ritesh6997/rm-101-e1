import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({addtask}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [newTask, setNewTask]=useState("")
  const handlechange = (e) => {
    setNewTask(e.target.value);
  }
  return (
    <div className={styles.todoForm}>
      <input
        onChange={(e) => {
          handlechange(e);
        }}
        data-testid="add-task-input"
        value={newTask}
        type="text"
      />
      <button
        style={{ backgroundColor: "whitesmoke" }}
        onClick={() => {
          if (newTask === "") return;
          addtask(newTask);
          setNewTask("");
        }}
        data-testid="add-task-button"
      >
        +
      </button>
    </div>
  );
};

export default AddTask;
