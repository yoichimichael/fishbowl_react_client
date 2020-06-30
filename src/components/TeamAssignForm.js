import React, { Component } from 'react';
import styles from '../stylesheets/TeamAssignForm.module.css'
import PlayerRow from './PlayerRow.js'

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
        <input
          className={styles.startGameButton}
          type="button"
          value="Create Game"
          // onClick={this.handleClick}
        />
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
        <br/>
        {/* <div className={styles.tableHeaders}>
          <p className={styles.player}>Player Name</p>
          <p className={styles.team}>A/B</p>
        </div> */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Player</th>
              <th>A</th>
              <th>B</th>
            </tr>
          </thead>
          <tbody>          
            {/* <tr>
              <td style={{"text-decoration": "underline"}}>Dummy Player</td>
              <td>
                <input
                  type="radio"
                />
              </td>
              <td>
                <input
                  type="radio"
                />
              </td>
            </tr> */}
            <PlayerRow/>
            <PlayerRow/>
            <PlayerRow/>
          </tbody>
        </table>
      </>
    )
  }
}

export default TeamAssignForm;