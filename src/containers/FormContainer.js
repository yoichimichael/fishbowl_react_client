import React, { Component } from 'react'
import HostForm from '../components/HostForm.js'
import PlayerForm from '../components/PlayerForm.js'


class FormContainer extends Component {

  state = {

  }

  render(){

    const {
      showHostSignin,
      addGame,
      addPlayer,
      game,
      players,
      addToPlayers,
      changeContainerNum,
      addTeamIds,
      updatePlayers,
      splitPlayersIntoTeams,
      addIntervalId
    } = this.props

    return(
      <>
        {showHostSignin ? 
          <HostForm
            addGame={addGame}
            addPlayer={addPlayer}
            game={game}
            addToPlayers={addToPlayers}
            changeContainerNum={changeContainerNum}
            addTeamIds={addTeamIds}
            updatePlayers={updatePlayers}
            addIntervalId={addIntervalId}
          /> :
          <PlayerForm 
            changeContainerNum={changeContainerNum}
            updatePlayers={updatePlayers}
            addIntervalId={addIntervalId}
            addPlayer={addPlayer}
            players={players}
            splitPlayersIntoTeams={splitPlayersIntoTeams}
          />
        }
        
      </>
    )
  }
}

export default FormContainer;