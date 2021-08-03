import React from "react";
import styles from "./center.module.css";
import sweet from "../../images/sweets.jpeg";

const center = () => {
  return (
    <div className={styles.centered} id="about">
      <div className={styles.main}>
        <p className={styles.head}>
          about <span className={styles.pink}>us</span>
        </p>
        <p>
          We provide the best quality products. Our specialities are cakes,
          pastries, cupcakes, doughnuts and sweets.
        </p>
      </div>
      <div className={styles.animate}>
        <div className={styles.animated}></div>
        <div>
          <img className={styles.image} src={sweet} alt="sweets"></img>
        </div>
      </div>
    </div>
  );
};

export default center;
