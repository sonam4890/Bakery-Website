import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./modal.module.css";

const modal = (props) => {
  let back = props.seen ? (
    <div className={styles.modal}>
      <div className={styles.Close} onClick={props.remove}>
        <i className="times icon"></i>
      </div>
      <div className={styles.Main}>
        <img src={props.image1} alt=""></img>
        <div
          className={styles.Next}
          onClick={() => props.nextclick(props.image1)}
        >
          <i className="angle right icon"></i>
        </div>
        <div
          className={styles.Prev}
          onClick={() => props.prevclick(props.image1)}
        >
          <i className="angle left icon"></i>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div>
      {back}
      <Backdrop open={props.seen} />
    </div>
  );
};

export default modal;
