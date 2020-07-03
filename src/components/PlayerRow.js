import React, { Component } from 'react'

class PlayerRow extends Component {
  
  state = {
    team_id: this.props.team_id
  }

  handleChange = (e) => {
    this.setState({team_id: parseInt(e.target.value)})
    fetch(`http://localhost:3000/players/${this.props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: 'empty',
        join_code: 'empty',
        //above values are such to pass rails strong params standards
        player_id: this.props.id,
        team_a_id: this.props.teamAId,
        team_b_id: this.props.teamBId
      }) 
    })
  };

  render(){

    // console.log(this.state.team_id)

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