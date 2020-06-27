import React, { Component } from 'react'
import styles from '../stylesheets/MainContainer.module.css'

class MainContainer extends Component {

  handleClick = () => {
    this.props.showRulesToggle()
  }; 

  render(){
    return (
      <div className={styles.mainDiv}>
        <h1>Main Container</h1>
        <input 
          type="button" 
          value="Rules" 
          onClick={this.handleClick}></input>
      </div>
    )
  }
}

export default MainContainer;