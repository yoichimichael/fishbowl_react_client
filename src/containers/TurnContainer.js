import React, { Component } from 'react'
import TurnLobbyView from '../components/TurnLobbyView.js'
import TurnView from '../components/TurnView.js'
import TurnEndView from '../components/TurnEndView.js'

class TurnContainer extends Component {
  state = {
    deck: [],
    deckIndex: 0,
    points: 0,
    guessedCards: [],
    passCount: 0
  }

  // fisher-yates shuffle
  shuffle = (array) => {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  loadDeck = () => {
    const game = this.props.game
    const roundCards = game.rounds[game.rounds.length - 1].submissions
    const shuffledCards = this.shuffle([...roundCards])
    this.setState({deck: shuffledCards})
  };

  // called when a performer presses "Got it!" button
  // adds 1 point, removes guessed card from deck... 
  // ... and starts new deck of guessed cards
  score = () => {
    this.setState(prevState => ({points: prevState.points + 1}))

    let deckCopy = [...this.state.deck]
    const guessedCard = deckCopy.splice(this.state.deckIndex, 1)
    this.setState(prevState => {
      return {
        deck: deckCopy,
        guessedCards: [...prevState.guessedCards, guessedCard]
      }
    })
    if(this.state.deck.length === 0){
      this.props.endTurn()
    }
    console.log(this.state.deck, this.state.guessedCards)
  };

  pass = () => {
    this.setState(prevState => ({passCount: prevState.passCount + 1}))

    if (this.state.deckIndex === this.state.deck.length - 1){
      this.setState({deckIndex: 0})  
    } else {
      this.setState(prevState => ({deckIndex: prevState.deckIndex + 1}))
    }
  };



  render(){

    const {
      clock,
      game,
      setClockIntervalId,
      endTurn,
      player,
      playerId,
      players,
      findPlayerById,
      turnSection
    } = this.props



    switch(turnSection){
      case 1: 
        return <TurnLobbyView
          game={game}
          player={player}
          playerId={playerId}
          findPlayerById={findPlayerById}
          loadDeck={this.loadDeck}
          setClockIntervalId={setClockIntervalId}
          endTurn={endTurn}
        />
      case 2:
        return <TurnView
          clock={clock}
          game={game}
          // roundCards={game.rounds[game.rounds.length - 1].submissions}
          deck={this.state.deck}
          deckIndex={this.state.deckIndex}
          score={this.score}
          pass={this.pass}
          passCount={this.state.passCount}
          player={player}
          playerId={playerId}
          players={players}
          findPlayerById={findPlayerById}
        />
      case 3:
        return <TurnEndView/>
    }
  };
};

export default TurnContainer;