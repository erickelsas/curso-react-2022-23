import React from 'react';
import styles from './CarDetails.module.css';

const CarDetails = ({brand, model, color, km}) => {
  return (
    <div>
        <br/>
        <h1 className={styles.title}>{brand + " " + model}</h1>
        <h3 className={styles.cor}>Cor: {color}</h3>
        <h3 className={styles.km}>KM: {km}</h3>
    </div>
  )
}

export default CarDetails