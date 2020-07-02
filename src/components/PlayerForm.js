import React, { Component } from 'react';
import styles from '../stylesheets/PlayerForm.module.css'

class PlayerForm extends Component {

  state = {
    showCodeEntry: false,
    name: '',
    joinCode: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    if(e.target.value === "Next"){
      this.setState({showCodeEntry: true})
    } else {
      fetch("http://localhost:3000/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        join_code: this.state.joinCode
      }) 
    })
      .then(resp => resp.json())
      .then(playerObj => {
        this.props.addPlayer(playerObj)
        const pullPlayersInterval = setInterval(
          this.props.updatePlayers, 
          2000, 
          playerObj.game_id
        )
        this.props.addIntervalId(pullPlayersInterval)
        // this.props.splitPlayersIntoTeams(this.props.players)
        this.props.changeContainerNum(3)
      })
    }
  }

  render(){
    // console.log()
    return(
      <> 
        {this.state.showCodeEntry ?  
          <>
            <h2 className={styles.h2}>
              Enter Join Code:
            </h2>
            <input
              className={styles.input}
              type="text"
              name="joinCode"
              value={this.state.joinCode}
              onChange={this.handleChange}
            />
            <br/>
            <input
              className={styles.gameButton}
              type="button"
              value="Join"
              onClick={this.handleClick}             
            />
          </> :
          <>
            <h2 className={styles.h2}>
              Enter Your Name:
            </h2>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br/>
            <input
              className={styles.gameButton}
              type="button"
              value="Next" 
              onClick={this.handleClick}             
            />
          </> 
        }
      </>
    )
  }
}

export default PlayerForm;