# setIntervals:

* clock countdown 
location: TurnLobbyView.js, startTurn function
description: sends patch request every 1s to reduce clock by
interval location: App.js state
clearInterval location: App.js, endTurn function

# setTimeout:

* round timer
location: TurnLobbyView.js, startTurn function
description: triggers endTurn function in App.js

* 'unflash' guessed card
location: TurnContainer.js, score function
description: after specified time, sends patch request to remove card_flash attribute from game instance, thereby 'unflashing' the guessed card by peformer from other players' screens

