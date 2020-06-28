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
          /> :
          <HomeView 
            showHost={this.showHost}
            showPlayer={this.showPlayer}
            showRulesToggle={this.props.showRulesToggle}
            showFormsToggle={this.props.showFormsToggle}
          />
        }
        
      </>
    )
  }
};

export default SigninContainer;