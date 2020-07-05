import React, { Component } from 'react'
import styles from '../stylesheets/RoundLobbyView.module.css'

class RoundLobbyView extends Component {
  state = {

  }

  render(){
    const {
      game,
      player,
      playerId
    } = this.props

    return(
      <>
        {/* change below to game.rounds[-1].name */}
        <h1 className={styles.h1}>Round 1: Taboo</h1>
        <p>{tabooRules}</p>
        { false ?
          <>
            <h2>You're up, Player!</h2>
            <input
              type="button"
              value="Go!"
              onClick={this.handleClick}
            />
          </>
          :
          <h3 className={styles.h3}>Waiting for Player...</h3>
        }

      </>
    )
  }
}

export default RoundLobbyView;

const tabooRules = "You may use any words to describe what’s on the card EXCEPT the words written on the card."

const charadesRules = "Classic charades rules: no words, no sounds, just movements."

const oneWordRules = "Think of ONE word that best evokes what’s written on the card. No sounds, no movements, ONE word only!"