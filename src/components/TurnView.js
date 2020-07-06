import React, { Component } from 'react'
import styles from '../stylesheets/TurnView.module.css'

class TurnView extends Component {

  state = {
    // adjust for playerId
    showPerformerView: true,
    points: 0,
    // cards: []
  }

  handleClick = (e) => {
    if(e.target.value === "Got it!"){
      this.setState(prevState => {
        return {
          points: prevState.points + 1
        }
      })
    }
  };

  render(){

    const {
      showPerformerView
    } = this.state

    const {
      clock,
      game,
      player,
      playerId,
      players,
      findPlayerById
    } = this.props

    return(
      <>
        {showPerformerView ?
          <h2 className={styles.youreUp}>{player.name}, you're up!</h2>
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
            <h2>Team {
              findPlayerById(
                players,
                game.rounds[game.rounds.length - 1].player_id
              ).team.team_letter
            } is up!</h2>
            <br/>
            <h3>Current Performer:</h3>
            <br/>
            <h2>{
              findPlayerById(
                players,
                game.rounds[game.rounds.length - 1].player_id
              ).name
            }</h2>
          </>
        }
      </>
    )
  }
}

export default TurnView;