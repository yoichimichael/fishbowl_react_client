import React, { Component } from 'react';
import styles from '../stylesheets/PlayerForm.module.css'

class PlayerForm extends Component {

  render(){
    return(
      <>
        <h2 className={styles.h2}>
          Enter Your Name:
        </h2>
        <input
          className={styles.input}
          type="text"
        />
        <br/>
        <input
          className={styles.gameButton}
          type="button"
          value="Next"
        />
      </>
    )
  }
}

export default PlayerForm;