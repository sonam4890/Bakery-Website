import React from "react";
import Logo from "../../images/logo.jpg";
import styles from "./sidedrawer.module.css";
import {Link } from 'react-router-dom';

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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="store">Store</Link>
        </li>
      </ul>
    </div>
  );
};

export default sidedrawer;
