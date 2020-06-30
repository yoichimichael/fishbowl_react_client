import React, { Component } from 'react';

class TeamAssignForm extends Component {
  state = {
    teamA: '',
    teamB: ''
  }

  render(){
    
    return(
      <>
        <h3>Join Code:</h3>
        <h1>{this.props.game.attributes.join_code}</h1>
        <label for="teamA">Team A:</label>
        <input id="teamA"/>
        <label for="teamB">Team B:</label>
        <input id="teamB"/>
      </>
    )
  }
}

export default TeamAssignForm;