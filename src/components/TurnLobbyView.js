import React, { Component } from 'react'
import styles from '../stylesheets/TurnLobbyView.module.css'

class TurnLobbyView extends Component {
  state = {
  }

  // starts a 'turn' by setting round.turn_part = 'play' in rounds table
  // only accessible by 'performer'
  startTurn = () => {
    const game = this.props.game
    const currentRound = game.rounds[game.rounds.length - 1]

    fetch(`http://localhost:3000/rounds/${currentRound.id}/start`, {
      method: "PATCH"
    })

    this.props.loadDeck()
    const countDownIntervalId = setInterval(this.updateClock, 1000)
    this.props.setClockIntervalId(countDownIntervalId)
    // "ends" turn after 5 sec; calls endTurn function in App.js
    const clock = setTimeout(this.props.endTurn, 15000);

  };

  // At 1sec intervals sends PATCH requests to server 
  updateClock = () => {
    const game = this.props.game
    const currentRound = game.rounds[game.rounds.length - 1]

    // non-crud routing to decrement round.clock
    fetch(`http://localhost:3000/rounds/${currentRound.id}/countdown`, {
      method: "PATCH"
    })
  };

  render(){
    const {
      game,
      player,
      playerId,
      findPlayerById
    } = this.props

    const tabooRules = "You may use any words to describe what’s on the card EXCEPT the words written on the card."

    const charadesRules = "Classic charades rules: no words, no sounds, just movements."

    const oneWordRules = "Think of ONE word that best evokes what’s written on the card. No sounds, no movements, ONE word only!"

    return(
      <>
        <h1 className={styles.h1}>Round 1: Taboo</h1>
        <p>{tabooRules}</p>
        { game.rounds[game.rounds.length - 1].player_id === playerId ?
          <>
            <h2>You're up, {player.name}</h2>
            <input
              type="button"
              value="Go!"
              onClick={this.startTurn}
            />
          </>
          :
          <h3 className={styles.h3}>Waiting for {
            findPlayerById(
              game.players, 
              game.rounds[game.rounds.length - 1].player_id
            ).name
          }...
          </h3>
        }

      </>
    )
  }
}

export default TurnLobbyView;