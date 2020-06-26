import React, { Component } from 'react';
import styles from '../stylesheets/RulesView.module.css'


export default class RulesView extends Component {
  
  state = {
    page: 1
  }
  
  render() {
    if(this.state.page === 1){
      return (
        <div className={styles.rulesDiv}>
          <h1 className={styles.h1}>Rules</h1>
          {this.state.page === 1? <p className={styles.p}>{page1}</p> : <p>page 2</p>}
          <div className={styles.buttonsFooter}>
            <input type="button" className={styles.lastButton} value="<"></input>
            <input type="button" className={styles.nextButton} value=">"></input>
            <br></br>
            <input type="button" className={styles.homeButton} value="Home"></input>
          </div>
        </div>
      );
    }
  }
}

const page1 = "Fishbowl is a 3-round parlour-style game. 4 or more \    players split into two teams. Teams take turns with a performer from \ their team trying to get their teammates to guess what is written on \ player-submitted cards randomly selected from a collective \
'fishbowl.' While the cards are reused, the same each round differs \
in performance rules. The team with the most points wins."
