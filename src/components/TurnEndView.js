import React, { Component } from 'react'
import styles from '../stylesheets/TurnEndView.module.css'

class TurnEndView extends Component {
  state = {

  }
  render(){

    const {
      deck,
      teamA,
      teamB,
      performer, // this is a round???
      points
    } = this.props

    return(
      <>
        <h1 className={styles.timesUp}>Time's Up!</h1>
        <h3 className={styles.h3}>
          {/* updated points can only be seen by performer */}
          {performer? performer.name : "Performer"} got <u>{points ? points : 9}</u> points
        </h3>
        <h2 className={styles.h2}>Score:</h2>
        <h3 className={styles.teamAName}>
          Team A: {teamA ? teamA.team_name : "The Sharks"}
        </h3>
        <h3 className={styles.teamBName}>
          Team B: {teamB? teamB.team_name : "The Jets"}
        </h3>
        <h1 className={styles.teamAScore}>
          {teamA ? teamA.score : "00"}
        </h1>
        <h1 className={styles.teamBScore}>
          {teamB ? teamB.score : "00"}
        </h1>
        <h3 className={styles.cardsLeft}>Cards Left in Fishbowl:</h3>
        {/* updated deck can only be seen by performer */}
        <h1 className={styles.cardNum}>
          {deck? deck.length : 88}
        </h1>
        <h3 className={styles.next}>Next Performer:</h3>
        <h2 className={styles.nextName}>The Next Guy!</h2>
      </>
    )
  };
};

export default TurnEndView;