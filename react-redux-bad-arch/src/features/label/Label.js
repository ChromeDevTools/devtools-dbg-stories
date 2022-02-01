import React from "react";
import { useSelector } from "react-redux";
import styles from "./Label.module.css";
import { selectData } from "./labelSlice";

export function useSomeComputedState() {
  return (
    useSelector(s => selectData(s, 0)) +
    useSelector(s => selectData(s, 1)) +
    useSelector(s => selectData(s, 2)) +
    useSelector(s => selectData(s, 3)) +
    useSelector(s => selectData(s, 4)) +
    useSelector(s => selectData(s, 5)) +
    useSelector(s => selectData(s, 6)) +
    useSelector(s => selectData(s, 7)) +
    useSelector(s => selectData(s, 8)) +
    useSelector(s => selectData(s, 9)) +
    useSelector(s => selectData(s, 10)) +
    useSelector(s => selectData(s, 11)) +
    useSelector(s => selectData(s, 12)) +
    useSelector(s => selectData(s, 13)) +
    useSelector(s => selectData(s, 14)) +
    useSelector(s => selectData(s, 15)) +
    useSelector(s => selectData(s, 16)) +
    useSelector(s => selectData(s, 17)) +
    useSelector(s => selectData(s, 18)) +
    useSelector(s => selectData(s, 19)) +
    useSelector(s => selectData(s, 20)) +
    useSelector(s => selectData(s, 21)) +
    useSelector(s => selectData(s, 22)) +
    useSelector(s => selectData(s, 23)) +
    useSelector(s => selectData(s, 24))
  );
}

export function Label() {
  let text = useSomeComputedState();
  return <div className={`${styles.label}`}>{text}</div>;
}
