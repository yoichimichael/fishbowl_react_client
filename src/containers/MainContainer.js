import React, { Component } from 'react'
import SigninContainer from './SigninContainer'
import styles from '../stylesheets/MainContainer.module.css'
import TeamAssignForm from '../components/TeamAssignForm'

class MainContainer extends Component {

  state = {
  
  }

  render(){

    const { 
      showRulesToggle, 
      showForms, 
      showFormsToggle,
      containerNum,
      changeContainerNum,
      addGame, 
      addPlayer,
      game,
      players,
      addToPlayers,
      addTeamIds,
      teamAId,
      teamBId
    } = this.props

    switch(containerNum){
      case 1:
        return (
          <SigninContainer 
            showRulesToggle={showRulesToggle}
            showFormsToggle={showFormsToggle}
            showForms={showForms}
            addGame={addGame}
            addPlayer={addPlayer}
            game={game}
            changeContainerNum={changeContainerNum}
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