import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({value}) => {
  // sample values to be replaced
  let totalTask = value.completed;
  let unCompletedTask = value.uncomplete;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
     You have
      <b data-testid="header-remaining-task">{unCompletedTask}</b> of  
      <b data-testid="header-total-task">{totalTask}</b>
        tasks remaining
      
    </div>
  );
};

export default TaskHeader;
