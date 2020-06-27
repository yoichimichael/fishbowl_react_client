import React, { Component } from 'react';
import styles from '../stylesheets/SigninContainer.module.css'

class SigninContainer extends Component {
  
  state = {

  }
  
  handleClick = (e) => {
    if (e.target.value === "Rules"){
      this.props.showRulesToggle()
    }
  }
  
  render(){
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
        <input
          className={styles.rulesButton} 
          type="button" 
          value="Rules" 
          onClick={this.handleClick}>
        </input>
      </>
    )
  }
};

export default SigninContainer;