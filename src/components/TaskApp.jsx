import React, { useEffect, useState } from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import taskdata from "../data/tasks.json";
import Task from "./Task/Task";
const TaskApp = () => {
  console.log(taskdata,"taskdata");
  const [tasks, setTasks] = useState([...taskdata]);
  const [counts, setCount] = useState({
    uncomplete: 0,
    completed: 0,
  });
  const handlestate = (i, ele) => {
    console.log("hadle")
    const datafilter = tasks.filter(ele => {
      return tasks[i] != i;
    });
    setTasks([...datafilter, ele]);
  }
  const handledelete = (id) => {
    const filterData=tasks.filter((ele) => {
      return ele.id !== id;
    });
    setTasks(filterData);
  }
  useEffect(() => {
    if (tasks.length > 0) {
      const count = (tasks) => {
        let completed1 = 0;
        let uncomp = 0;
        for (let i = 0; i < tasks.length; i++) {
          console.log(tasks);
          if (tasks[i]["done"]) {
            completed1++;
          }
          else {
            uncomp++;
          }
        }
        setCount({ ...counts, uncomplete: uncomp, completed: completed1 });
      }
      count(tasks);
    }
  },[tasks])
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader value={counts} />
      {<AddTask></AddTask>}
      {tasks.length > 0 && (
        <Task
          handlestate={handlestate}
          handledelete={handledelete}
          value={tasks}
        />
      )}
    </div>
  );
};

export default TaskApp;
