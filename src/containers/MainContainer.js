import React, { Component } from 'react'
import SigninContainer from './SigninContainer'
// import styles from '../stylesheets/MainContainer.module.css'
import TeamAssignForm from '../components/TeamAssignForm'
import PlayerLobby from '../components/PlayerLobby'
import CardFormContainer from './CardFormContainer'
// import TurnLobbyView from '../components/TurnLobbyView'
// import TurnView from '../components/TurnView'
import TurnContainer from './TurnContainer'

class MainContainer extends Component {

  state = {
  
  }

  render(){

    const { 
      showRulesToggle, 
      showForms, 
      showFormsToggle,
      containerNum,
      turnSection,
      changeContainerNum,
      addGame, 
      addPlayer,
      clock,
      game,
      player,
      playerId,
      players,
      addToPlayers,
      addTeamIds,
      teamAId,
      teamBId,
      teamARoster,
      teamBRoster,
      updateGame,
      splitPlayersIntoTeams,
      addIntervalId,
      findPlayerById
    } = this.props

    // console.log(teamARoster, teamBRoster)

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
          updateGame={updateGame}
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
        return <CardFormContainer
          playerId={playerId}
          gameId={game.id}
          cardsPerPlayer={game.cards_per_player}
        />
      case 5:
        return <TurnContainer
          turnSection={turnSection} 
          clock={clock}
          game={game}
          player={player}
          playerId={playerId}
          players={players}
          findPlayerById={findPlayerById}
        />
      // case 6:
      //   return <TurnView 
      //     clock={clock}
      //   />
    }
  }
}

export default MainContainer;