import React, { Component } from 'react'
import styles from '../stylesheets/RoundLobbyView.module.css'

class RoundLobbyView extends Component {
  state = {

  }

  render(){
    const {
      game,
      player,
      playerId,
      findPlayerById
    } = this.props

    return(
      <>
        {/* change below to game.rounds[-1].name */}
        <h1 className={styles.h1}>Round 1: Taboo</h1>
        <p>{tabooRules}</p>
        { game.rounds[0].player_id === playerId ?
          <>
            <h2>You're up, {player.name}</h2>
            <input
              type="button"
              value="Go!"
              onClick={this.handleClick}
            />
          </>
          :
          <h3 className={styles.h3}>Waiting for {findPlayerById(game.players, game.rounds[0].player_id).name}...</h3>
        }

      </>
    )
  }
}

export default RoundLobbyView;

const tabooRules = "You may use any words to describe what’s on the card EXCEPT the words written on the card."

const charadesRules = "Classic charades rules: no words, no sounds, just movements."

const oneWordRules = "Think of ONE word that best evokes what’s written on the card. No sounds, no movements, ONE word only!"