import React, { Component } from 'react'

class PlayerRow extends Component {
  
  state = {

  }

  render(){
    return(
      <tr>
        <td 
          style={{"textDecoration": "underline"}}>Dummy Player
        </td>
        <td>
          <input
            type="radio"
            name="playerSelect"
            value="A"
          />
        </td>
        <td>
          <input
            type="radio"
            name="playerSelect"
            value="B"
          />
        </td>
      </tr>
    )
  }
};

export default PlayerRow;