import React, { Component } from 'react';
import styles from '../stylesheets/HostForm.module.css'

class HostForm extends Component {

  state = {
    hostName: ''
  }

  handleChange = (e) => {
    this.setState({hostName: e.target.value})
  };

  // creates a randomized upcase 6-char string
  generateJoinCode = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz'
    let code = '';
    for (var i = 6; i > 0; i--) { 
      code +=  
        chars[Math.floor(Math.random() * chars.length)]; 
    } 
    return code.toUpperCase()
  };

  handleClick = () => {
    fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        join_code: this.generateJoinCode(),
        host_name: this.state.hostName
      }) 
    })
      .then(resp => resp.json())
      .then(gameObj => {
        const hostObj = gameObj.host
        const teamAId = gameObj.teams[0].id
        const teamBId = gameObj.teams[1].id

        this.props.addGame(gameObj)
        this.props.addPlayer(hostObj)
        this.props.addToPlayers(hostObj)        
        this.props.addTeamIds(teamAId, teamBId)
        this.props.changeContainerNum(2)
      })
  }

  render(){
    return(
      <>
        <h2 className={styles.h2}>
          Enter Your Name:
        </h2>
        <input
          className={styles.input}
          type="text"
          value={this.state.hostName}
          onChange={this.handleChange}
        />
        <br/>
        <input
          className={styles.gameButton}
          type="button"
          value="Create Game"
          onClick={this.handleClick}
        />
      </>
    )
  }
}

export default HostForm;