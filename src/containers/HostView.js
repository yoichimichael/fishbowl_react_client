import React, { Component } from 'react';
import HostForm from '../components/HostForm.js'
import TeamAssignForm from '../components/TeamAssignForm.js'

class HostView extends Component {
  
  state = {
    showTeamAssign: false
  } 

  showTeamAssignToggle = () => {
    this.setState({showTeamAssign: true})
  };

  render(){

    const {
      addGame,
      addPlayer,
      game
    } = this.props

    return(
      <>
        {this.state.showTeamAssign ? 
        <TeamAssignForm 
          game={game}
        /> :
        <HostForm
          showTeamAssignToggle={this.showTeamAssignToggle}
          addGame={addGame}
          addPlayer={addPlayer}
        /> 
        }
      </>
    )
  }
}

export default HostView;