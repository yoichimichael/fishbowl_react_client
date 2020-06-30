import React, { Component } from 'react'

class PlayerRow extends Component {
  
  state = {

  }

  render(){
    return(
      <tr>
        <td 
          style={{"text-decoration": "underline"}}>Dummy Player
        </td>
        <td>
          <input
            type="radio"
          />
        </td>
        <td>
          <input
            type="radio"
          />
        </td>
      </tr>
    )
  }
};

export default PlayerRow;