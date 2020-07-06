import React, { Component } from 'react'
import styles from '../stylesheets/TurnLobbyView.module.css'

class TurnLobbyView extends Component {
  state = {

  }

  // starts a turn by round.in_play === true
  handleClick = () => {
    // change later to last round in array?
    const game = this.props.game
    const currentRound = game.rounds[game.rounds.length - 1]
    fetch(`http://localhost:3000/rounds/${currentRound.id}/start`, {
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
              onClick={this.handleClick}
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