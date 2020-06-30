import React, { Component } from 'react'

class PlayerRow extends Component {
  
  state = {
    team_id: this.props.team_id
  }

  handleChange = (e) => {
    this.setState({team_id: parseInt(e.target.value)})
  };

  render(){

    console.log(this.state.team_id)

    const {
      name,
      teamAId,
      teamBId
    } = this.props

    return(
      <tr>
        <td 
          style={{"textDecoration": "underline"}}>{name}
        </td>
        <td>
          <input
            type="radio"
            name={`${name}TeamSelect`}
            value={teamAId}
            checked={this.state.team_id === teamAId ? true : false}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            type="radio"
            name={`${name}TeamSelect`}
            value={teamBId}
            checked={this.state.team_id === teamBId ? true : false}
            onChange={this.handleChange}
          />
        </td>
      </tr>
    )
  }
};

export default PlayerRow;