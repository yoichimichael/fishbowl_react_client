import React, { Component } from 'react';
import styles from '../stylesheets/RulesView.module.css'

const rulesStyles = {
  height: "518px",
  width: "320px",
  backgroundColor: "#D8D8D8",
  margin: "0px auto"
}

const h1Style = {
  margin: "0"
}

export default class RulesView extends Component {
  
  state = {
    page: 1
  }
  
  render() {
    if(this.state.page === 1){
      return (
        <div className={styles.rulesDiv}>
          <h1 className={styles.h1}>Rules</h1>
          {this.state.page === 1? <p>rules 1</p> : <p>rules 2</p>}
        </div>
      );
    }
  }
}
