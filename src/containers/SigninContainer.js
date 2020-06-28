import React, { Component } from 'react';
import HomeView from '../components/HomeView.js'
import FormContainer from './FormContainer.js'
import styles from '../stylesheets/SigninContainer.module.css'

class SigninContainer extends Component {
  
  state = {
    formToggle: false
  }

  formToggle = () => {
    this.setState
  };

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
          <FormContainer /> :
          <HomeView 
            showRulesToggle={this.props.showRulesToggle}
            showFormsToggle={this.props.showFormsToggle}
          />
        }
        
      </>
    )
  }
};

export default SigninContainer;