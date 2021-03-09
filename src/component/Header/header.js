import React from "react";
import styles from "../../App.module.css";
import bg from "../../images/cupcake-1.jpeg";

const header = () => {
  return (
    <div className={styles.header} id="header">
      <img className={styles.pic} src={bg} alt="bg image"></img>
      <div className={styles.content}>
        <p className={styles.head}>
          welcome to <span className={styles.pink}>grandma's</span>
        </p>
        <p>Cakes, pastries, doughnuts, and sweets specialist</p>
      </div>
    </div>
  );
};

export default header;
