import React, { Component } from 'react';
import HomeView from '../components/HomeView.js'
import FormContainer from './FormContainer.js'
import styles from '../stylesheets/SigninContainer.module.css'

class SigninContainer extends Component {
  
  state = {
    showHostSignin: false
  }

  showHost = () => {
    this.setState({showHostSignin: true})
  };

  showPlayer = () => {
    this.setState({showHostSignin: false})
  }

  render(){

    const {
      showRulesToggle,
      showFormsToggle,
      addGame,
      addPlayer,
      game,
      players,
      addToPlayers,
      changeContainerNum,
      addTeamIds,
      updatePlayers,
      splitPlayersIntoTeams,
      addIntervalId
    } = this.props

    return(
      <>
        <h1 className={styles.h1}>
          FISHBOWL
        </h1>
        <img
          className={styles.icon} 
          src="../../icons/fishbowl/fishbowl_01.svg"
          alt="fishbowl icon"
        />
        {this.props.showForms ? 
          <FormContainer 
            showHostSignin={this.state.showHostSignin}
            addGame={addGame}
            addPlayer={addPlayer}
            game={game}
            players={players}
            addToPlayers={addToPlayers}
            changeContainerNum={changeContainerNum}
            addTeamIds={addTeamIds}
            updatePlayers={updatePlayers}
            splitPlayersIntoTeams={splitPlayersIntoTeams}
            addIntervalId={addIntervalId}
          /> :
          <HomeView 
            showHost={this.showHost}
            showPlayer={this.showPlayer}
            showRulesToggle={showRulesToggle}
            showFormsToggle={showFormsToggle}
          />
        }
        
      </>
    )
  }
};

export default SigninContainer;