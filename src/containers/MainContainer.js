import React, { Component } from 'react'
import SigninContainer from './SigninContainer'
import styles from '../stylesheets/MainContainer.module.css'

class MainContainer extends Component {

  state = {
    game: null
  }

  render(){

    const { 
      showRulesToggle, 
      showForms, 
      showFormsToggle, 
      addGame, 
      addPlayer,
      game
    } = this.props

    return (
      <div className={styles.mainDiv}>
        <SigninContainer 
          showRulesToggle={showRulesToggle}
          showFormsToggle={showFormsToggle}
          showForms={showForms}
          addGame={addGame}
          addPlayer={addPlayer}
          game={game}
        />
      </div>
    )
  }
}

export default MainContainer;