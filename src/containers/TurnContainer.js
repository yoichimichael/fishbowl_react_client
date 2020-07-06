import React, { Component } from 'react'
import TurnLobbyView from '../components/TurnLobbyView.js'
import TurnView from '../components/TurnView.js'
import TurnEndView from '../components/TurnEndView.js'

class TurnContainer extends Component {
  state = {
  }

  render(){

    const {
      clock,
      game,
      player,
      playerId,
      players,
      findPlayerById,
      turnSection
    } = this.props

    switch(turnSection){
      case 1: 
        return <TurnLobbyView
          game={game}
          player={player}
          playerId={playerId}
          findPlayerById={findPlayerById}
        />
      case 2:
        return <TurnView
          clock={clock}
          game={game}
          player={player}
          playerId={playerId}
          players={players}
          findPlayerById={findPlayerById}
        />
      case 3:
        return <TurnEndView/>
    }
  };
};

export default TurnContainer;