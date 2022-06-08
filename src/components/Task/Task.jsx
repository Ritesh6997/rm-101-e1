import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
const Task = ({ value,handledelete,handlestate }) => {
  console.log(handlestate);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      {value.map((ele,i) => (
        <li data-testid="task" className={styles.task}>
          <input onClick={() => {
            ele.done = !ele.done
            handlestate(i,ele);
          }} type="checkbox" data-testid="task-checkbox" />
          <div data-testid="task-text">{ele.text}</div>
          {<Counter count={ele.count}></Counter>}
          <button onClick={() => {
            handledelete(ele.id);
          }} data-testid="task-remove-button">delect</button>
        </li>
      ))}
    </>
  );
};

export default Task;
