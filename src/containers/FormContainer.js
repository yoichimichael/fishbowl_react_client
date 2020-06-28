import React, { Component } from 'react'
import HostForm from '../components/HostForm.js'
import PlayerForm from '../components/PlayerForm.js'
import TeamForm from '../components/TeamForm.js'

class FormContainer extends Component {

  state = {

  }

  render(){
    return(
      <>
        {this.props.showHostSignin ? 
          <HostForm /> :
          <PlayerForm />
        }
        
      </>
    )
  }
}

export default FormContainer;