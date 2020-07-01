import React, { Component } from 'react'

class TeamColumnRow extends Component {
  state = {

  }
  render(){
    return(
      <tr>
        <td>{this.props.name}</td>
      </tr>
    )
  };
};

export default TeamColumnRow;