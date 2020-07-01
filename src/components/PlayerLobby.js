import React, { Component } from 'react'
import styles from '../stylesheets/PlayerLobby.module.css'

class PlayerLobby extends Component {
  state = {

  }

  render(){
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
        <div className={styles.teamATable}>
          <table>
            <thead>
              <tr>
                <th>Team A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jake</td>
              </tr>
              <tr>
                <td>Sally</td>
              </tr>
              <tr>
                <td>Jim</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.teamBTable}>
          <table>
            <thead>
              <tr>
                <th>Team B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shamiq</td>
              </tr>
              <tr>
                <td>Wendy</td>
              </tr>
              <tr>
                <td>Tetsuro</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )  
  }
}

export default PlayerLobby