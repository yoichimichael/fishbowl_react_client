import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import MainContainer from './containers/MainContainer';
import RulesView from './components/RulesView.js'

class App extends Component {
  
  state = {
    showRules: false
  }

  showRulesToggle = () => {
    this.setState(prevState => {
      return {
        showRules: !prevState.showRules
      }
    })
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        {this.state.showRules ? 
          <RulesView /> : 
          <MainContainer showRulesToggle={this.showRulesToggle}/>
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