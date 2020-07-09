import React, { Component } from 'react'
import SigninContainer from './SigninContainer'
// import styles from '../stylesheets/MainContainer.module.css'
import TeamAssignForm from '../components/TeamAssignForm'
import PlayerLobby from '../components/PlayerLobby'
import CardFormContainer from './CardFormContainer'
// import TurnLobbyView from '../components/TurnLobbyView'
// import TurnView from '../components/TurnView'
import TurnContainer from './TurnContainer'
import TurnEndView from '../components/TurnEndView'

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
      cardFlash,
      setClockIntervalId,
      endTurn,
      player,
      playerId,
      players,
      performer,
      addToPlayers,
      addTeamIds,
      teamA,
      teamB,
      teamAId,
      teamBId,
      teamARoster,
      teamBRoster,
      updateGame,
      // splitPlayersIntoTeams,
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
          // splitPlayersIntoTeams={splitPlayersIntoTeams}
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
          cardFlash={cardFlash}
          game={game}
          teamA={teamA}
          teamB={teamB}
          teamARoster={teamARoster}
          teamBRoster={teamBRoster}
          setClockIntervalId={setClockIntervalId}
          endTurn={endTurn}
          player={player}
          playerId={playerId}
          players={players}
          performer={performer}
          findPlayerById={findPlayerById}
        />
      // case 6:
      //   return <TurnEndView/>
    }
  }
}

export default MainContainer;