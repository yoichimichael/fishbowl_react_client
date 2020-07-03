import React, { Component } from 'react'
import SigninContainer from './SigninContainer'
import styles from '../stylesheets/MainContainer.module.css'
import TeamAssignForm from '../components/TeamAssignForm'
import PlayerLobby from '../components/PlayerLobby'
import CardFormContainer from './CardFormContainer'

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
      teamBId,
      teamARoster,
      teamBRoster,
      updatePlayers,
      splitPlayersIntoTeams,
      addIntervalId
    } = this.props

    console.log(teamARoster, teamBRoster)

    switch(containerNum){
      case 1:
        return <SigninContainer 
          showRulesToggle={showRulesToggle}
          showFormsToggle={showFormsToggle}
          showForms={showForms}
          addGame={addGame}
          addPlayer={addPlayer}
          game={game}
          players={players}
          changeContainerNum={changeContainerNum}
          addToPlayers={addToPlayers}
          addTeamIds={addTeamIds}
          updatePlayers={updatePlayers}
          splitPlayersIntoTeams={splitPlayersIntoTeams}
          addIntervalId={addIntervalId}
        />
      case 2:
        return <TeamAssignForm 
          game={game}
          players={players}
          teamAId={teamAId}
          teamBId={teamBId}
        />
      case 3:
        return <PlayerLobby
          players={players}
          teamARoster={teamARoster}
          teamBRoster={teamBRoster}
        />
      case 4:
        return <CardFormContainer/>
    }
  }
}

export default MainContainer;