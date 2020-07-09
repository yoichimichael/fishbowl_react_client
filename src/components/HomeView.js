import React, { Component } from 'react'
import styles from '../stylesheets/HomeView.module.css'

class HomeView extends Component {

  handleClick = (e) => {
    if (e.target.value === "Rules"){
      this.props.showRulesToggle()
    } else if (e.target.value === "Host New Game"){
      this.props.showFormsToggle()
      this.props.showHost()
    } else if (e.target.value === "Join Game"){
      this.props.showFormsToggle()
      this.props.showPlayer()
    }
  }

  render(){
    return(
      <>
        <br/>
        <p className={styles.chatCompanion}>A Video Chat Companion</p>
        <input
          onClick={this.handleClick}
          className={styles.gameButton}
          type="button"
          value="Host New Game"
        />
        <br/>
        <input
          onClick={this.handleClick}
          className={styles.gameButton}
          type="button"
          value="Join Game"
        />
        {/* test for card position for flash on screen */}
        {/* <div className={styles.card}>
          <h1>Testing Out Cards</h1>
        </div> */}
        <input
            className={styles.rulesButton} 
            type="button" 
            value="Rules" 
            onClick={this.handleClick}
        />
        </>
    )
  }
}

export default HomeView;