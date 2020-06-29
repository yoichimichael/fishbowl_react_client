import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import MainContainer from './containers/MainContainer';
import RulesView from './components/RulesView.js'

class App extends Component {
  
  state = {
    showRules: false,
    showForms: false
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

  // startGameRequest = () => {
  //   fetch('gameURL', {
  //     method: 'POST',
  //     headers: headers,
  //     body: JSON.stringify({
  //       name: "jed"
  //     })
  //   })

  // };

  render(){
    return (
      <div className="App">
        <NavBar setToHome={this.setToHome}/>
        {this.state.showRules ? 
          <RulesView showRulesToggle={this.showRulesToggle}/> : 
          <MainContainer 
            showRulesToggle={this.showRulesToggle}
            showFormsToggle={this.showFormsToggle}
            showForms={this.state.showForms}
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