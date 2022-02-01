import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Counter.module.css";
import { increment, selectCount } from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className={styles.counter}>
      <input
        type="button"
        value="+"
        className={styles.button}
        onClick={() => dispatch(increment())}
      />
      <span className={styles.value}>{count}</span>
    </div>
  );
}
