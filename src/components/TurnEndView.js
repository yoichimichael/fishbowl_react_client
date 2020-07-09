import React, { Component } from 'react'
import styles from '../stylesheets/TurnEndView.module.css'

class TurnEndView extends Component {
  state = {

  }

  findNextPlayer = () => {
    const performer = this.props.performer
    const teamARoster = this.props.teamARoster
    const teamBRoster = this.props.teamBRoster 

    const performerTeam = this.findPerformerTeam(performer)

    if(performerTeam.team_letter === 'a'){
      const match = teamARoster.find(member => member.id === performer.id)
      const index = teamARoster.indexOf(match)
      return teamBRoster[index]
    } else {
      const match = teamBRoster.find(member => member.id === performer.id)
      const index = teamBRoster.indexOf(match)
      return teamARoster[index]
    }
  };


  findPerformerTeam = (performer) => {
    const teamA = this.props.teamA
    const teamB = this.props.teamB

    if(performer.team_id === teamA.id){
      return teamA
    } else {
      return teamB
    }
  };

  render(){

    const {
      deck,
      teamA,
      teamB,
      performer,
      currentRound
    } = this.props

    return(
      <>
        <h1 className={styles.timesUp}>Time's Up!</h1>
        <h3 className={styles.h3}>
          {/* updated points can only be seen by performer */}
          {performer? performer.name : "Performer"} got <u>{performer.turn_score ? performer.turn_score : 9}</u> points
        </h3>
        <h2 className={styles.h2}>Team Scores:</h2>
        <h3 className={styles.teamAName}>
          {teamA ? teamA.team_name : "The Sharks"}
        </h3>
        <h3 className={styles.teamBName}>
          {teamB? teamB.team_name : "The Jets"}
        </h3>
        <h1 className={styles.teamAScore}>
          {this.findPerformerTeam(performer).team_letter === 'a' ? teamA.score + performer.turn_score : teamA.score}
        </h1>
        <h1 className={styles.teamBScore}>
          {this.findPerformerTeam(performer).team_letter === 'b' ? teamB.score + performer.turn_score : teamB.score}
        </h1>
        <h3 className={styles.cardsLeft}>Cards Left in Fishbowl:</h3>
        {/* updated deck can only be seen by performer */}
        <h1 className={styles.cardNum}>
          {currentRound.submissions.length - performer.turn_score}
        </h1>
        <h3 className={styles.next}>Next Performer:</h3>
        <h2 className={styles.nextName}>{this.findNextPlayer(performer).name}
        </h2>
      </>
    )
  };
};

export default TurnEndView;