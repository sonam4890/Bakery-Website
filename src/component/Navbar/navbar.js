import React from "react";
import Logo from "../../images/logo.jpg";
import styles from "./navbar.module.css";
import Sidedrawer from "../sidedrawer/sidedrawer";
import Backdrop from "../Backdrop/Backdrop";
import {Link} from 'react-router-dom';

const navbar = (props) => {
  let sidedrawer = props.shows ? (
    <Sidedrawer close={props.remove} open={props.shows} />
  ) : null;
  return (
    <div className={styles.navbar}>
      {sidedrawer}
      <Backdrop open={props.shows} />
      <div className={styles.bar} onClick={props.clicked}>
        <i className="bars icon"></i>
      </div>
      <div>
        <img className={styles.logo} src={Logo} alt="logo"></img>
      </div>
      <ul className={styles.menubar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
      </ul>
      <div className={styles.other}>
      <Link to="/login" className={styles.login}>
        {props.auth? <span onClick={props.logout}>Logout</span> : <span>login</span>}
      </Link>
      <Link to='/orders' className={styles.order}>
        orders
      </Link>
      <Link to='/cart' className={styles.cart} >
        <i className="shopping cart icon"></i>
        {props.item?.length} items
      </Link>
      </div>
    </div>
  );
};

export default navbar;
