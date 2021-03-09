import React from "react";
import Logo from "../../images/logo.jpg";
import styles from "../../App.module.css";
import Sidedrawer from "../sidedrawer/sidedrawer";
import Backdrop from "../Backdrop/Backdrop";

const navbar = (props) => {
  let sidedrawer = props.shows ? (
    <Sidedrawer close={props.remove} open={props.shows} />
  ) : null;
  return (
    <div className={styles.navbar}>
      {sidedrawer}
      <Backdrop open={props.shows} />
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
      <span className={styles.number}>
        <i className="phone icon"></i>+917042127206
      </span>
      <span className={styles.cart}>
        <i className="shopping cart icon"></i>
        {props.item} items
      </span>
      <span className={styles.bar} onClick={props.clicked}>
        <i className="bars icon"></i>
      </span>
    </div>
  );
};

export default navbar;
