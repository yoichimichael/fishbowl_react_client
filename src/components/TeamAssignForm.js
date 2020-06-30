import React, { Component } from 'react';
import styles from '../stylesheets/TeamAssignForm.module.css'
import PlayerRow from './PlayerRow.js'

class TeamAssignForm extends Component {
  state = {
    teamAName: '',
    teamBName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render(){
    console.log(this.state.teamAName, this.state.teamBName)   

    const {
      game,
      players,
      teamAId,
      teamBId
    } = this.props

    return(
      <>
        <h3 className={styles.h3}>Join Code:</h3>
        <h1 className={styles.h1}>
          {game.attributes.join_code}
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
            name="teamAName" 
            type="text" 
            value={this.state.teamAName}
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.teamBInputDiv}>
          <label htmlFor="teamB">Team B Name:</label>
          <br/>
          <input 
            className={styles.teamBInput}
            id="teamB"
            name="teamBName" 
            type="text" 
            value={this.state.teamBName}
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
            {players.map(player => <PlayerRow 
              key={player.id} 
              {...player}
              teamAId={teamAId}
              teamBId={teamBId}
            />)}
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
            {/* <PlayerRow/>
            <PlayerRow/>
            <PlayerRow/> */}
          </tbody>
        </table>
      </>
    )
  }
}

export default TeamAssignForm;