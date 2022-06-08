import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
  const [count1, setCount] = useState(count);
  const handleCountChange = (val) => {
    if (count1 == 0 && val===-1) {
      return;
    }
      setCount(prev=>prev+val)
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button
        onClick={() => handleCountChange(1)}
        data-testid="task-counter-increment-button"
      >
        +
      </button>
      <span data-testid="task-counter-value">{count1}</span>
      <button
        onClick={() => handleCountChange(-1)}
        data-testid="task-counter-decrement-button"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
