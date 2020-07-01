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
      addToPlayers,
      changeContainerNum,
      addTeamIds
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
          /> :
          <PlayerForm 
            changeContainerNum={changeContainerNum}
          />
        }
        
      </>
    )
  }
}

export default FormContainer;