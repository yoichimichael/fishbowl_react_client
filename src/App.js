import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import MainContainer from './containers/MainContainer';
import RulesView from './components/RulesView.js'

class App extends Component {
  
  state = {
    showRules: false,
    showForms: false,
    game: null,
    player: null
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
      showForms: false
    })
  };

  addGame = (gameObj) => {
    this.setState({game: gameObj})
  };

  addPlayer = (playerObj) => {
    this.setState({player: playerObj})
  };


  render(){
    console.log(this.state.game, this.state.player)

    const {
      setToHome,
      showRulesToggle,
      showFormsToggle,
      addGame,
      addPlayer
    } = this

    return (
      <div className="App">
        <NavBar setToHome={setToHome}/>
        {this.state.showRules ? 
          <RulesView showRulesToggle={showRulesToggle}/> : 
          <MainContainer 
            showRulesToggle={showRulesToggle}
            showFormsToggle={showFormsToggle}
            showForms={this.state.showForms}
            addGame={addGame}
            addPlayer={addPlayer}
            game={this.state.game}
          />
        }
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