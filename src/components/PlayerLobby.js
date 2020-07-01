import React, { Component } from 'react'
import styles from '../stylesheets/PlayerLobby.module.css'
import PlayerNameRow from './PlayerNameRow';

class PlayerLobby extends Component {
  state = {
    teamA: [],
    teamB: []
  }

  splitPlayersIntoTeams = (players) => {
    players.forEach(player => {
      if(player.team.team_letter === "a"){
        this.setState(prevState => {
          return {
            teamA: [...prevState.teamA, player]
          }
        })
      } else {
        this.setState(prevState => {
          return {
            teamB: [...prevState.teamB, player]
          }
        })
      }
    })
  };

  render(){

    const {
      teamA,
      teamB
    } = this.state
    return (
      <>
        <h1 className={styles.h1}>
          FISHBOWL
        </h1>
        <img
          className={styles.icon} 
          src="../../icons/fishbowl/fishbowl_01.svg"
          alt="fishbowl icon"
        />
        <h3 className={styles.h3}>Waiting for Host...</h3>
        <div className={styles.teamATable}>
          <table>
            <thead>
              <tr>
                <th className={styles.teamA}>Team A</th>
              </tr>
            </thead>
            <tbody>
              {teamA.map(player => <PlayerNameRow 
                key={player.id} 
                name={player.name}
              />)}
              {/* <tr>
                <td>Jake</td>
              </tr>
              <tr>
                <td>Sally</td>
              </tr>
              <tr>
                <td>Jim</td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <div className={styles.teamBTable}>
          <table>
            <thead>
              <tr>
                <th className={styles.teamB}>Team B</th>
              </tr>
            </thead>
            <tbody>
              {teamB.map(player => <PlayerNameRow 
                key={player.id} 
                name={player.name}
              />)}
              {/* <tr>
                <td>Shamiq</td>
              </tr>
              <tr>
                <td>Wendy</td>
              </tr>
              <tr>
                <td>Tetsuro</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </>
    )  
  }
}

export default PlayerLobby