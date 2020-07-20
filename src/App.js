import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import styles from './stylesheets/App.module.css'
import NavBar from './components/NavBar.js'
import MainContainer from './containers/MainContainer';
import RulesView from './components/RulesView.js'

class App extends Component {
  
  state = {
    showRules: false,
    showForms: false,
    containerNum: 1,
    turnSection: 1,
    clock: null,
    clockIntervalId: null,
    game: undefined,
    teamA: undefined,
    teamB: undefined,
    cardFlash: null,
    teamAId: undefined,
    teamBId: undefined,
    player: undefined,
    playerId: undefined,
    players: [],
    performer: undefined,
    teamARoster: [],
    teamBRoster: [],
    intervalId: null
  }

  showRulesToggle = () => {
    this.setState(prevState => {
      return {
        showRules: !prevState.showRules
      }
    })
  }

  showFormsToggle = () => {
    this.setState(prevState => {
      return {
        showForms: !prevState.showForms
      }
    })
  }

  setToHome = () => {
    this.setState({
      showRules: false,
    showForms: false,
    containerNum: 1,
    game: undefined,
    teamAId: undefined,
    teamBId: undefined,
    player: undefined,
    players: [],
    teamARoster: [],
    teamBRoster: [],
    intervalId: null
    })
    clearInterval(this.state.intervalId)
  };

  addGame = (gameObj) => {
    this.setState({game: gameObj})
  };

  // sets player AND playerID states
  addPlayer = (playerObj) => {
    this.setState({player: playerObj, playerId: playerObj.id})
  };

  findPlayerById = (players, id) => {
    return players.find(player => player.id === id)
  };

  // returns team with team_letter === "a" from game's pair of teams 
  returnTeamA = (teams) => {
    if(teams[0].team_letter === 'a'){
      return teams[0]
    } else {
      return teams[1]
    }
  };
  // returns team with team_letter === "b" from game's pair of teams
  returnTeamB = (teams) => {
    if(teams[0].team_letter === 'b'){
      return teams[0]
    } else {
      return teams[1]
    }
  }

  addToPlayers = (playerObj) => {
    this.setState(prevState => {
      return {
        players: [...prevState.players, playerObj]
      }
    })
  };

  addTeamIds = (teamAId, teamBId) => {
    this.setState({teamAId: teamAId, teamBId: teamBId})
  };

  changeContainerNum = (num) => {
    this.setState({containerNum: num})
  };

  addIntervalId = (id) => {
    this.setState({intervalId: id})
  };
  

  switchToTurnView = () => {
    this.setState({turnSection: 2})
  };

  setClock = (newTime) => {
    this.setState({clock: newTime})
  };

  setClockIntervalId = (id) => {
    this.setState({clockIntervalId: id})
  };

  // below method called by a timeOut in startTurn() method by
  // performer by pressing 'Go!'
  endTurn = (submissionIds) => {
    const game = this.state.game
    const currentRound = game.rounds[game.rounds.length - 1]

    clearInterval(this.state.clockIntervalId);
    fetch(`http://localhost:3000/rounds/${currentRound.id}/end`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        submissionIDs: submissionIds
      })
    })
  };

  switchToCardSubmissionView = () => {
    if(this.state.game && this.state.game.submissions.length === 0){      
      const teamA = this.state.teamA
      const teamB = this.state.teamB

      // shows CardFormContainer
      if(teamA.team_name && teamB.team_name){
        this.setState({containerNum: 4})
      }
    }
  };

  // controls game data updating and flow
  updateGame = (gameId) => {
    fetch(`http://localhost:3000/games/${gameId}`)
      .then(resp => resp.json())
      .then(gameObj => {
        const currentRound = gameObj.rounds[gameObj.rounds.length - 1]

        this.setState({
          game: gameObj,
          player: this.findPlayerById(gameObj.players, this.state.playerId),
          players: gameObj.players,
          teamA: this.returnTeamA(gameObj.teams),
          teamB: this.returnTeamB(gameObj.teams),
          teamARoster: this.getTeamAPlayers(gameObj.players),
          teamBRoster: this.getTeamBPlayers(gameObj.players),
          cardFlash: gameObj.card_flash
        })

        // this.splitPlayersIntoTeams(gameObj.players)
        this.switchToCardSubmissionView()

        // if a round has been created
        if(gameObj.rounds.length > 0){
          // change later to be a player obj, not performer obj
          // i.e. don't use round to get 'performer'
          this.setState({performer: currentRound.performer})
          this.setClock(currentRound.clock)

          switch(currentRound.turn_part){
            case "lobby":
              this.setState({containerNum: 5});
              break;
            case "play":
              this.switchToTurnView();
              break;
            case "end":
              this.setState({turnSection: 3});
          }
        }
      })
  };

  getTeamAPlayers = (players) => {
    const teamAPlayers = []
    players.forEach(player => {
      if(player.team.team_letter === "a"){
        teamAPlayers.push(player)
      }
    })
    return teamAPlayers
  };

  getTeamBPlayers = (players) => {
    const teamBPlayers = []
    players.forEach(player => {
      if(player.team.team_letter === "b"){
        teamBPlayers.push(player)
      }
    })
    return teamBPlayers
  };

  // splitPlayersIntoTeams = (players) => {
  //   players.forEach(player => {
  //     if(player.team.team_letter === "a"){
  //       this.setState(prevState => {
  //         return {
  //           teamARoster: [...prevState.teamARoster, player]
  //         }
  //       })
  //     } else {
  //       this.setState(prevState => {
  //         return {
  //           teamBRoster: [...prevState.teamBRoster, player]
  //         }
  //       })
  //     }
  //   })
  // };


  render(){
    // console.log(this.state.teamARoster, this.state.teamBRoster)

    const {
      showRules,
      showForms,
      containerNum,
      turnSection,
      clock,
      cardFlash,
      game,
      teamA,
      teamB,
      teamAId,
      teamBId,
      player,
      playerId,
      players,
      performer,
      teamARoster,
      teamBRoster
    } = this.state

    const {
      setToHome,
      showRulesToggle,
      showFormsToggle,
      changeContainerNum,
      addGame,
      addPlayer,
      addToPlayers,
      addTeamIds,
      updateGame,
      // splitPlayersIntoTeams,
      addIntervalId,
      findPlayerById,
      setClockIntervalId,
      endTurn
    } = this

    return (
      <div className={styles.app}>
        <NavBar 
          setToHome={setToHome}
          player={player}
        />
        <div className={styles.mainDiv}>
          {showRules ? 
            <RulesView 
              showRulesToggle={showRulesToggle}
            /> 
            : 
            <MainContainer 
              showRulesToggle={showRulesToggle}
              showFormsToggle={showFormsToggle}
              showForms={showForms}
              containerNum={containerNum}
              turnSection={turnSection}
              changeContainerNum={changeContainerNum}
              addGame={addGame}
              addPlayer={addPlayer}
              clock={clock}
              setClockIntervalId={setClockIntervalId}
              endTurn={endTurn}
              game={game}
              cardFlash={cardFlash}
              player={player}
              playerId={playerId}
              players={players}
              performer={performer}
              addToPlayers={addToPlayers}
              addTeamIds={addTeamIds}
              teamA={teamA}
              teamB={teamB}
              teamAId={teamAId}
              teamBId={teamBId}
              teamARoster={teamARoster}
              teamBRoster={teamBRoster}
              updateGame={updateGame}
              // splitPlayersIntoTeams={splitPlayersIntoTeams}
              addIntervalId={addIntervalId}
              findPlayerById={findPlayerById}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;

      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>