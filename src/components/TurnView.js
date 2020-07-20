import React, { Component } from 'react'
import styles from '../stylesheets/TurnView.module.css'

class TurnView extends Component {

  state = {
    // adjust for playerId
    // showPerformerView: true,
    // points: 0,
    // index: 0,
    // cards: this.shuffle([...this.props.roundCards])
    // "this.shuffle not a function"?
  }

  handleClick = (e) => {
    if(e.target.value === "Got it!" && this.props.deck.length > 0){
      this.props.score()
    } else if (e.target.value === "Pass"){
      this.props.pass()
    }
  };

  render(){

    const {
      clock,
      game,
      cardFlash,
      deck,
      deckIndex,
      passCount,
      gotLastCard,
      player,
      playerId,
      players,
      findPlayerById
    } = this.props

    const currentRound = game.rounds[game.rounds.length - 1]
    // const shuffledSubmissions = this.shuffle([...roundCards])
    // const cardIndex = this.state.index

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
            { !gotLastCard ?
              <div className={styles.card}>
                <h3 className={styles.cardText}>
                  {deck[deckIndex].content}
                </h3>
              </div>
              :
              null
            }
            <input
              className={styles.gotIt}
              type = "button"
              value = "Got it!"
              onClick={this.handleClick}
            />
            <br/>
            {/* num times player can pass */}
            {passCount < 2 ?
              <input
                className={styles.pass}
                type = "button"
                value = "Pass"
                onClick={this.handleClick}
              />
              :
              null
            }
          </>
          :
          <>
            <br/>
            { cardFlash ?
              <div className={styles.card}>
                <h3 className={styles.cardText}>
                  {cardFlash}
                </h3>
              </div>
              :
              null
            }
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