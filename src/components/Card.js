import React from 'react';
import styles from '../stylesheets/Card.module.css'

function Card(props){
  return (
    <li className={styles.card}>
      {props.text}
      <input
        className={styles.button}
         type="button"
         value="x"
         name={props.text}
         onClick={props.handleClick}
      />
    </li>
  )
};

export default Card