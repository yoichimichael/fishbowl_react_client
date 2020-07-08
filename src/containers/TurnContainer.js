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
    passCount: 0,
    gotLastCard: false
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

  flashCard = () => {
    const game = this.props.game
    const deck = this.state.deck
    const deckIndex = this.state.deckIndex

    fetch(`http://localhost:3000/games/${game.id}/flash`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        host_name: 'empty',
        join_code: 'empty',
        flash_card: `${deck[deckIndex].content}`
      }) 
    })
  };

  unflashCard = () => {
    const game = this.props.game

    fetch(`http://localhost:3000/games/${game.id}/unflash`, {
      method: "PATCH"
    })
  };


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
    let deckCopy = [...this.state.deck]
    const guessedCard = deckCopy.splice(this.state.deckIndex, 1)

    this.flashCard()
    setTimeout(this.unflashCard, 1000)

    this.setState(prevState => {
      if(this.state.deck.length === 1){
        this.props.endTurn()
        return {
          points: prevState.points + 1,
          guessedCards: [...prevState.guessedCards, guessedCard],
          deck: deckCopy,
          gotLastCard: !prevState.gotLastCard
        }
      } else {
        // console.log(`${this.state.deck.length - 1} cards left`)
        return {
          points: prevState.points + 1,
          guessedCards: [...prevState.guessedCards, guessedCard],
          deck: deckCopy
        }
      }
    })
    // , () => console.log(this.state.deck, this.state.guessedCards)
  };

  pass = () => {
    this.setState(prevState => {
      if(this.state.deckIndex === this.state.deck.length - 1){
        return {
          deckIndex: 0,
          passCount: prevState.passCount + 1
        }
      } else {
        return {
          deckIndex: prevState.deckIndex + 1,
          passCount: prevState.passCount + 1
        }
      }
    })
  };



  render(){
    // console.log(this.state.deck, this.state.guessedCards)

    const {
      points,
      deck
    } = this.state

    const {
      clock,
      game,
      teamA,
      teamB,
      cardFlash,
      setClockIntervalId,
      endTurn,
      player,
      playerId,
      players,
      performer,
      findPlayerById,
      turnSection
    } = this.props

    const currentRound = game.rounds[game.rounds.length -1]

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
          cardFlash={cardFlash}
          // roundCards={game.rounds[game.rounds.length - 1].submissions}
          deck={this.state.deck}
          deckIndex={this.state.deckIndex}
          guessedCards={this.state.guessedCards}
          score={this.score}
          pass={this.pass}
          passCount={this.state.passCount}
          gotLastCard={this.state.gotLastCard}
          player={player}
          playerId={playerId}
          players={players}
          findPlayerById={findPlayerById}
        />
      case 3:
        return <TurnEndView
          deck={deck}
          points={points}
          performer={performer}
          teamA={teamA}
          teamB={teamB}
        />
    }
  };
};

export default TurnContainer;