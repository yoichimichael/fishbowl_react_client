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
    containerNum: 3,
    game: undefined,
    teamAId: undefined,
    teamBId: undefined,
    player: undefined,
    players: []
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
      players: []
    })
  };

  addGame = (gameObj) => {
    this.setState({game: gameObj})
  };

  addPlayer = (playerObj) => {
    this.setState({player: playerObj})
  };

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


  render(){
    console.log(this.state.game)

    const {
      setToHome,
      showRulesToggle,
      showFormsToggle,
      changeContainerNum,
      addGame,
      addPlayer,
      addToPlayers,
      addTeamIds
    } = this

    return (
      <div className={styles.app}>
        <NavBar setToHome={setToHome}/>
        <div className={styles.mainDiv}>
          {this.state.showRules ? 
            <RulesView showRulesToggle={showRulesToggle}/> : 
            <MainContainer 
              showRulesToggle={showRulesToggle}
              showFormsToggle={showFormsToggle}
              showForms={this.state.showForms}
              containerNum={this.state.containerNum}
              changeContainerNum={changeContainerNum}
              addGame={addGame}
              addPlayer={addPlayer}
              game={this.state.game}
              players={this.state.players}
              addToPlayers={addToPlayers}
              addTeamIds={addTeamIds}
              teamAId={this.state.teamAId}
              teamBId={this.state.teamBId}
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