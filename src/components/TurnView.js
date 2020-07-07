import React, { Component } from 'react'
import styles from '../stylesheets/TurnView.module.css'

class TurnView extends Component {

  state = {
    // adjust for playerId
    // showPerformerView: true,
    points: 0,
    index: 0
    // cards: []
  }

  handleClick = (e) => {
    if(e.target.value === "Got it!"){
      this.setState(prevState => {
        return {
          points: prevState.points + 1,
          index: prevState.index + 1
        }
      })
    }
    console.log(this.state)
  };

  shuffle = (array) => {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

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
    const shuffledSubmissions = this.shuffle([...currentRound.submissions])
    const cardIndex = this.state.index

    return(
      <>
        {currentRound.player_id === playerId ?
          <h2 className={styles.youreUp}>{player.name}, you're up!</h2>
          :
          <h2 className={styles.isUp}>Team {
            findPlayerById(
              players,
              currentRound.player_id
            ).team.team_letter.toUpperCase()
          } is up!</h2>
        }
        <h3 className={styles.h3}>Time Left:</h3>
        <h1>{clock} s</h1>
        {currentRound.player_id === playerId ? 
          <>
            <div className={styles.card}>
              <h3 className={styles.cardText}>
                {shuffledSubmissions[cardIndex].content}
              </h3>
            </div>
            <input
              type = "button"
              value = "Got it!"
              onClick={this.handleClick}
            />
            <br/>
            <input
              type = "button"
              value = "Pass"
            />
          </>
          :
          <>
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