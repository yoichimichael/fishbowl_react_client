import React, { Component } from 'react'
import styles from '../stylesheets/CardFormContainer.module.css'
import Card from '../components/Card.js'

class CardFormContainer extends Component {
  state = { 
    text: '',
    cards: [],
    requiredNumOfCards: 5
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  };

  handleClick = (e) => {
    if(e.target.value === "Create Card"){
      this.setState(prevState => {
        return {
          cards: [...prevState.cards, this.state.text],
          text: ''
        }
      })
    } else if (e.target.value === "x"){
      console.log("hit")
      const newCards = this.state.cards.filter(card => {
        return card !== e.target.name
      })
      this.setState({cards: newCards})
    } else if (e.target.value === "Submit Cards to the Fishbowl"){
      fetch("http://localhost:3000/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          player_id: this.props.playerId,
          game_id: this.props.gameId,
          submissions: this.state.cards
        }) 
      })
    }
  };

  render(){
    return(
      <>
        {this.state.cards.length !== this.state.requiredNumOfCards ?
          <>
            <h2 className={styles.h3}>Enter Card Text:</h2>
            <input 
              className={styles.textInput}
              name="text" 
              type="text" 
              value={this.state.text}
              onChange={this.handleChange}
            />
            <br/>
            <input
              className={styles.button}
              type="button"
              value="Create Card"
              onClick={this.handleClick}
            />
            <h3>Cards Left to Write:</h3>
            <h2>{this.state.requiredNumOfCards - this.state.cards.length}</h2>
          </> 
          :
          <input
            type="button"
            value="Submit Cards to the Fishbowl"
            onClick={this.handleClick}
          />
        }
        <ul>
          {this.state.cards.map(card => {
            return <Card 
              key={this.state.cards.indexOf(card)}
              text={card}
              handleClick={this.handleClick}
            />
          })}
        </ul>
      </>
    )    
  }
};

export default CardFormContainer;