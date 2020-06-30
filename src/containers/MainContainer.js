import React, { Component } from 'react'
import SigninContainer from './SigninContainer'
import styles from '../stylesheets/MainContainer.module.css'
import TeamAssignForm from '../components/TeamAssignForm'

class MainContainer extends Component {

  state = {
    containerNum: 1
  }

  changeContainerNum = (num) => {
    this.setState({containerNum: num})
  };

  render(){

    const { 
      showRulesToggle, 
      showForms, 
      showFormsToggle, 
      addGame, 
      addPlayer,
      game,
      players,
      addToPlayers,
      addTeamIds,
      teamAId,
      teamBId
    } = this.props

    switch(this.state.containerNum){
      case 1:
        return (
          <SigninContainer 
            showRulesToggle={showRulesToggle}
            showFormsToggle={showFormsToggle}
            showForms={showForms}
            addGame={addGame}
            addPlayer={addPlayer}
            game={game}
            changeContainerNum={this.changeContainerNum}
            addToPlayers={addToPlayers}
            addTeamIds={addTeamIds}
          />
        )
      case 2:
        return <TeamAssignForm 
          game={game}
          players={players}
          teamAId={teamAId}
          teamBId={teamBId}
        />
    }
  }
}

export default MainContainer;