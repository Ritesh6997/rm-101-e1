import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [id, setId]=useState(5)
  const handlechange = (e) => {
    
    // setNewTask({...newTask,text:e.target.value });
  }
  return (
    <div className={styles.todoForm}>
      <input on onChange={(e) => {
        handlechange(e);
      }} data-testid="add-task-input" type="text" />
      <button onClick={() => {
        setId((prev) => prev + 1);
      }} data-testid="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
