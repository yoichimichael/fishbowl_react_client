import React, { Component } from 'react'
import styles from '../stylesheets/TurnView.module.css'

class TurnView extends Component {
  state = {
    // adjust for playerId
    showPerformerView: true,
    points: 0
  }

  render(){

    const {
      showPerformerView,
      clock
    } = this.state
    return(
      <>
        {showPerformerView ?
          <h2 className={styles.youreUp}>Performer, you're up!</h2>
          :
          null
        }
        <h3 className={styles.h3}>Time Left:</h3>
        <h1>{clock} s</h1>
        {showPerformerView ? 
          <>
            <div className={styles.card}>
              <h3 className={styles.cardText}>Santa's Workshop</h3>
            </div>
            <input
              type = "button"
              value = "Got it!"
            />
            <br/>
            <input
              type = "button"
              value = "Pass"
            />
          </>
          :
          <>
            <h2>Team __ is up!</h2>
            <br/>
            <h3>Current Performer:</h3>
            <br/>
            <h2>Performer Name</h2>
          </>
        }
      </>
    )
  }
}

export default TurnView;