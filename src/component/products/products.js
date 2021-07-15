import React from 'react';
import Filter from '../Filter/filter';
import Gallary from '../GallaryImage/gallary';
import styles from '../../App.module.css'


const products = (props) => {
    let show = props.images.map((el, i) => {
        if (el.show === true) {
          return (
            <Gallary
              image={el.name}
              key={i}
              clicked={() => props.imageHandler(i)}
              price={el.price}
              click={() => props.cartHandler(el)}
            />
          );
        }
      })
    return (
        <div>
            <Filter changed={props.filter} item={props.ButtonHandler}/>
            <div className={styles.gallary}>{show}</div>
        </div>
    )
}

export default products;