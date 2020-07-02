import React, { Component } from 'react'

class PlayerNameRow extends Component {
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

export default PlayerNameRow;