import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
const Task = ({ value,handledelete,handlestate }) => {
  console.log(handlestate);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      {value.map((ele, i) => (
        <li data-testid="task" className={styles.task}>
          <input
            onClick={() => {
              handlestate(ele);
            }}
            checked={ele.done}
            type="checkbox"
            data-testid="task-checkbox"
            className={styles.inp}
          />
          <div data-testid="task-text">{ele.text}</div>
          {<Counter count={ele.count}></Counter>}
          <button
            onClick={() => {
              handledelete(ele.id);
            }}
            style={{backgroundColor:"#0c042d",color:"white"}}
            data-testid="task-remove-button"
          >
            Delect
          </button>
        </li>
      ))}
    </>
  );
};

export default Task;
