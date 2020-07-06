import React, { Component } from 'react'
import styles from '../stylesheets/TurnView.module.css'

class TurnView extends Component {

  state = {
    // adjust for playerId
    // showPerformerView: true,
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
      clock,
      game,
      player,
      playerId,
      players,
      findPlayerById
    } = this.props

    const currentRound = game.rounds[game.rounds.length - 1]

    return(
      <>
        {currentRound.player_id === playerId ?
          <h2 className={styles.youreUp}>{player.name}, you're up!</h2>
          :
          null
        }
        <h3 className={styles.h3}>Time Left:</h3>
        <h1>{clock} s</h1>
        {currentRound.player_id === playerId ? 
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
                currentRound.player_id
              ).team.team_letter.toUpperCase()
            } is up!</h2>
            <br/>
            <h3>Current Performer:</h3>
            <br/>
            <h2>{
              findPlayerById(
                players,
                currentRound.player_id
              ).name
            }</h2>
          </>
        }
      </>
    )
  }
}

export default TurnView;