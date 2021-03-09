import React from "react";
import styles from "../../App.module.css";

const filter = (props) => {
  return (
    <div className={styles.footer} id="footer">
      <div>
        <p className={styles.head}>
          our <span className={styles.pink}>store</span>
        </p>
      </div>

      <div className={styles.menu}>
        <button className={styles.all1} onClick={() => props.item("all")}>
          all
        </button>
        <button className={styles.Cakes} onClick={() => props.item("cake")}>
          cakes
        </button>
        <button
          className={styles.Cupcakes}
          onClick={() => props.item("cupcake")}
        >
          cupcakes
        </button>
        <button className={styles.Sweets} onClick={() => props.item("sweet")}>
          sweets
        </button>
        <button
          className={styles.Doughnuts}
          onClick={() => props.item("doughnut")}
        >
          doughnuts
        </button>
      </div>

      <div className="ui action input">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => props.changed(event)}
        ></input>
        <button className="ui icon button" style={{ backgroundColor: "pink" }}>
          <i className="search icon"></i>
        </button>
      </div>
    </div>
  );
};

export default filter;
