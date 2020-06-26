import React, { Component } from 'react';

const rulesStyles = {
  height: "518px",
  width: "320px",
  backgroundColor: "#D8D8D8",
  margin: "0px auto"
}

export default class RulesView extends Component {
  
  state = {
    
  }
  
  render() {
    return (
      <div style={rulesStyles}>
        <h1>Rules</h1>
      </div>
    );
  }
}
