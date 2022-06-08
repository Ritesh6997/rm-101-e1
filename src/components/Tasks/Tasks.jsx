import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({value}) => {
  console.log(value)
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        <Task></Task>
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
