import React from "react";
import Logo from "../../images/logo.jpg";
import styles from "./sidedrawer.module.css";

const sidedrawer = (props) => {
  // let style = styles.menubar;
  // style = props.open
  //   ? (style = [styles.menubar, styles.side].join(" "))
  //   : style;

  return (
    <div className={styles.sidedrawer} onClick={props.close}>
      <div className={styles.Close} onClick={props.close}>
        <i className="times icon"></i>
      </div>
      <div>
        <img className={styles.logo} src={Logo} alt="logo"></img>
      </div>
      <ul className={styles.menubar}>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#footer">Store</a>
        </li>
      </ul>
    </div>
  );
};

export default sidedrawer;
