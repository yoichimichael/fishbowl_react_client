import React, { Component } from 'react'
import HostForm from '../components/HostForm.js'
import PlayerForm from '../components/PlayerForm.js'
import TeamForm from '../components/TeamForm.js'

class FormContainer extends Component {

  state = {

  }

  render(){

    const {
      showHostSignin,
      addGame,
      addPlayer
    } = this.props

    return(
      <>
        {showHostSignin ? 
          <HostForm
            addGame={addGame}
            addPlayer={addPlayer}
          /> :
          <PlayerForm />
        }
        
      </>
    )
  }
}

export default FormContainer;