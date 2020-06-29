import React, { Component } from 'react'
import SigninContainer from './SigninContainer'
import styles from '../stylesheets/MainContainer.module.css'

class MainContainer extends Component {

  state = {
    game: null
  }

  addGame = () => {
    
  };

  render(){
    return (
      <div className={styles.mainDiv}>
        <SigninContainer 
          showRulesToggle={this.props.showRulesToggle}
          showFormsToggle={this.props.showFormsToggle}
          showForms={this.props.showForms}
          />
      </div>
    )
  }
}

export default MainContainer;