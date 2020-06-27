import React, { Component } from 'react';
import styles from '../stylesheets/RulesView.module.css'


export default class RulesView extends Component {
  
  state = {
    page: 1
  }

  handleClick = (e) => {
    if (e.target.value === "<" && this.state.page > 1){
      this.setState(prevState => {
        return {
          page: prevState.page - 1
        }
      })
    } else if (e.target.value === ">" && this.state.page < 3){
      this.setState(prevState => {
        return {
          page: prevState.page + 1
        }
      })
    } else if (e.target.value === "Home") {
      this.props.showRulesToggle()
    }
  };

  rulesPage = (pageNum) => {
    switch(pageNum){
      case 2:
        return page2
      case 3:
        return page3
      default:
        return page1
    }
  }

  render() {
    return (
      <div className={styles.rulesDiv}>
        <h1 className={styles.h1}>Rules</h1>
        <p className={styles.p}>
          {this.rulesPage(this.state.page)}
        </p>
        <div className={styles.buttonsFooter}>
          <input 
            type="button" 
            className={styles.lastButton} 
            value="<"
            onClick={this.handleClick}
          ></input>
          <input 
            type="button" 
            className={styles.nextButton} 
            value=">"
            onClick={this.handleClick}
            ></input>
          <br></br>
          <input 
            type="button" 
            className={styles.homeButton} 
            value="Home"
            onClick={this.handleClick}
          >
          </input>
        </div>
      </div>
    );
  }
}


const page1 = "Fishbowl is a 3-round parlour-style game. 4 or more \    players split into two teams. Teams take turns with a performer from \ their team trying to get their teammates to guess what is written on \ player-submitted cards randomly selected from a collective \
'fishbowl.' While the cards are reused, each round differs \
in performance rules. The team with the most points wins."

const page2 = "4 players minimum. Teams can be uneven. Each player \ submits 5 - 10 cards, depending on the of number of players, to the \
'fishbowl.' Each card must have a word or phrase of player’s \
choice. The word or phrase can be anything. Each team takes turns. \ During a turn, one team member acts as the 'performer.' They have 1 \ minute to get their teammates to guess the contents of as many \ randomly selected cards as possible."

const page3 = "Even more rules, can you believe it???"