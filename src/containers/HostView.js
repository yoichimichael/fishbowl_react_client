import React, { Component } from 'react';
import HostForm from '../components/HostForm.js'
import TeamAssignForm from '../components/TeamAssignForm.js'

class HostView extends Component {
  state = {
    showTeamAssign: false
  } 

  render(){
    return(
      <>
        {this.state.showTeamAssign ? 
        <TeamAssignForm /> :
        <HostForm /> 
        }
      </>
    )
  }
}

export default HostView;