import React from "react";
import styles from "../../App.module.css";

const gallary = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.imageDiv} onClick={props.clicked}>
        <img src={props.image} alt="pic" className={styles.images} />
      </div>
      <div className={styles.price}>
        <button className={styles.cart2} onClick={props.click}>
          <i className="shopping cart icon"></i>
          ADD TO CART
          <p className={styles.pri}>Rs. {props.price}</p>
        </button>
      </div>
    </div>
  );
};

export default gallary;
