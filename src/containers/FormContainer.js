import React, { Component } from 'react'
import HostView from './HostView.js'
import PlayerForm from '../components/PlayerForm.js'

class FormContainer extends Component {

  state = {

  }

  render(){

    const {
      showHostSignin,
      addGame,
      addPlayer,
      game
    } = this.props

    return(
      <>
        {showHostSignin ? 
          <HostView
            addGame={addGame}
            addPlayer={addPlayer}
            game={game}
          /> :
          <PlayerForm />
        }
        
      </>
    )
  }
}

export default FormContainer;