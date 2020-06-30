import React, { Component } from 'react';
import styles from '../stylesheets/TeamAssignForm.module.css'

class TeamAssignForm extends Component {
  state = {
    teamA: '',
    teamB: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render(){
    console.log(this.state.teamA, this.state.teamB)   
    return(
      <>
        <h3 className={styles.h3}>Join Code:</h3>
        <h1 className={styles.h1}>
          {this.props.game.attributes.join_code}
        </h1>
        <div className={styles.teamAInputDiv}>
          <label htmlFor="teamA">Team A Name:</label>
          <br/>
          <input 
            className={styles.teamAInput}
            id="teamA"
            name="teamA" 
            type="text" 
            value={this.state.teamA}
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.teamBInputDiv}>
          <label htmlFor="teamB">Team B Name:</label>
          <br/>
          <input 
            className={styles.teamBInput}
            id="teamB"
            name="teamB" 
            type="text" 
            value={this.state.teamB}
            onChange={this.handleChange}
          />
        </div>  
      </>
    )
  }
}

export default TeamAssignForm;