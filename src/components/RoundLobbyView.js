import React, { Component } from 'react'
import styles from '../stylesheets/RoundLobbyView.module.css'

class RoundLobbyView extends Component {
  state = {

  }

  // starts a turn by round.in_play === true
  handleClick = () => {
    // change later to last round in array?
    fetch(`http://localhost:3000/rounds/${this.props.game.rounds[0].id}`, {
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

    return(
      <>
        <h1 className={styles.h1}>Round 1: Taboo</h1>
        <p>{tabooRules}</p>
        {/* last element in array == game.rounds[game.rounds.length -1] */}
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