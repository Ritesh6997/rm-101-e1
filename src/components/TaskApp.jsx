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
  const [id,setId]=useState(5)
  const handlestate = (ele) => {
    const datafilter = tasks.map(e => {
      if (e.id === ele.id) {
        e.done = !e.done; 
        return e;
      }
      return e;
    });
    setTasks([...datafilter]);
  }
  const handledelete = (id) => {
    const filterData=tasks.filter((ele) => {
      return ele.id !== id;
    });
    setTasks(filterData);
  }
  useEffect(() => {
    if (tasks.length > 0) {
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
  }, [tasks]);
  const addtask = (newTask) => {
    console.log(1);
         let obj={
          id: id+1,
          text: newTask,
          count: 1,
          done: false
        }
    setTasks([...tasks, obj]);
    setId(prev=>prev+1)
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader value={counts} />
      {<AddTask addtask={addtask}></AddTask>}
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
