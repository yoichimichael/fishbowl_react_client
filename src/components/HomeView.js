import React, { Component } from 'react'
import styles from '../stylesheets/HomeView.module.css'

class HomeView extends Component {

  handleClick = (e) => {
    if (e.target.value === "Rules"){
      this.props.showRulesToggle()
    } else if (e.target.value === "Host New Game"){
      this.props.showFormsToggle()
    } else if (e.target.value === "Join Game"){
      this.props.showFormsToggle()
    }
  }

  render(){
    return(
      <>
        <br/>
        <p>A Video Chat Companion</p>
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