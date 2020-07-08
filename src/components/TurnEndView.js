import React, { Component } from 'react'
import styles from '../stylesheets/TurnEndView.module.css'

class TurnEndView extends Component {
  state = {

  }
  render(){
    return(
      <>
        <h1 className={styles.timesUp}>Time's Up!</h1>
        <h3 className={styles.h3}>Hayao got <u>4</u> points</h3>
        <h2 className={styles.h2}>Score:</h2>
        <h3 className={styles.teamAName}>Team A: The Sharks</h3>
        <h3 className={styles.teamBName}>Team B: The Jets</h3>
        <h1 className={styles.teamAScore}>12</h1>
        <h1 className={styles.teamBScore}>6</h1>
        <h3 className={styles.cardsLeft}>Cards Left in Fishbowl:</h3>
        <h1 className={styles.cardNum}>24</h1>
        <h3 className={styles.next}>Next Performer:</h3>
        <h2 className={styles.nextName}>Alexander</h2>
      </>
    )
  };
};

export default TurnEndView;