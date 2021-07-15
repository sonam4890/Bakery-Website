import React from "react";
import styles from "../../App.module.css";
import bg from "../../images/cupcake-1.jpeg";

const header = (props) => {
  
  let store = () => {
    console.log(props)
    props.history.push('/store')
  }

  return (
    <div className={styles.header}>
      <img className={styles.pic} src={bg} alt="bg image"></img>
      <div className={styles.content}>
        <p className={styles.head}>
          welcome to <span className={styles.pink}>grandma's</span>
        </p>
        <p>Cakes, pastries, doughnuts, and sweets specialist</p>
        <span className={styles.exp} onClick={() => store()}>Explore</span>
      </div>
    </div>
  );
};

export default header;
