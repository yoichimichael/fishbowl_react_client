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
      changeContainerNum
    } = this.props

    return(
      <>
        {showHostSignin ? 
          <HostForm
            addGame={addGame}
            addPlayer={addPlayer}
            game={game}
            changeContainerNum={changeContainerNum}
          /> :
          <PlayerForm />
        }
        
      </>
    )
  }
}

export default FormContainer;