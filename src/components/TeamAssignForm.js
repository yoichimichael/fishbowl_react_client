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

  sortPlayersById = (players) => {
    const newPlayers = [...players]
    return newPlayers.sort((a, b) => a.id - b.id)
  };

  handleClick = () => {
    fetch("http://localhost:3000/teams", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        team_a_id: this.props.teamAId,
        team_b_id: this.props.teamBId,
        team_a_name: this.state.teamAName,
        team_b_name: this.state.teamBName
      }) 
    })
  };

  render(){

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
          {game.join_code}
        </h1>
        <input
          className={styles.startGameButton}
          type="button"
          value="Create Game"
          onClick={this.handleClick}
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
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Player</th>
              <th>A</th>
              <th>B</th>
            </tr>
          </thead>
          <tbody>          
            {this.sortPlayersById(players).map(player => <PlayerRow 
              key={player.id} 
              {...player}
              teamAId={teamAId}
              teamBId={teamBId}
            />)}
          </tbody>
        </table>
      </>
    )
  }
}

export default TeamAssignForm;