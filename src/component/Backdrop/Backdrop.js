import React from "react";
import styles from "./Backdrop.module.css";

const backdrop = (props) => {
  let back = props.open ? <div className={styles.Backdrop}></div> : null;

  return <div>{back}</div>;
};

export default backdrop;
