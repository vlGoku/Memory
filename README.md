# Memory

## Some explanation of the Code

Main files:

```sh
class Gameboard and file overlay
```

## class Gameboard

createCards and createVisualCards are here for creating the Cards in the backend and the frontend:

```sh
createCards(selectedDifficulty);
createVisualCards(selectedDifficulty);
```

pickCards is for picking the cards:

```sh
pickCards(index);
```

addBackToCard adds the class "back" to the card, toggleCard toggles between the classes "front" and "back" and turnBack turns back the card after it was revealed

```sh
addBackToCard();
toggleCard(cardElement);
turnBack(id1, id2);
```

checkForPair and checkForWin are self explanatory

```sh
checkForWin();
checkForPair();
```

wait just waits

```sh
wait(seconds);
```

shuffleArray shuffels the cards in the array so they are arranged randomly on the field

```sh
shuffleArray();
```

## overlay

createMainMenu creates the main Menu for the game

```sh
createMainMenu(gameboard);
```

startGame starts the game after the user inputs their name and select a difficulty and displays the players name and difficulty

```sh
function startGame(playerName, selectedDifficulty, gameboard)
  gameboard.createCards(selectedDifficulty);
  gameboard.shuffleArray();
  gameboard.createVisualCards(selectedDifficulty);
  displayPlayerInfo(playerName, selectedDifficulty);
  removeMainMenu();
  gameboard.addBackToCard();
```

removeMainMenu removes the menu after the start Game button has been klicked

```sh
function removeMainMenu();
```

createWinScreen creates the win Screen after the game is done

```sh
function createWinScreen();
```

showWinOverlay and hideWinOverlay are just here for showing/hiding the overlay

```sh
function showWinOverlay();
function hideWinOverlay();
```
