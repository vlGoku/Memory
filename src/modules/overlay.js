"use strict";
import { Gameboard } from "./gameboard";

// Funktion, um das Hauptmenü zu erstellen und in die DOM-Struktur einzufügen
function createMainMenu(gameboard) {
  // Erstelle Input-Feld für den Spielername
  const nameInput = document.createElement("input");
  nameInput.className = "input-field";
  nameInput.placeholder = "Enter your name";

  // Erstelle Select-Feld für die Schwierigkeitsauswahl
  const difficultySelect = document.createElement("select");
  difficultySelect.className = "select-field";
  const difficultyOptions = ["Leicht", "Mittel", "Schwer"];
  difficultyOptions.forEach((optionText) => {
    const option = document.createElement("option");
    option.text = optionText;
    difficultySelect.appendChild(option);
  });

  // Erstelle Start-Button
  const startButton = document.createElement("button");
  startButton.className = "start-button";
  startButton.innerText = "Start Game";

  // Füge die Elemente in die DOM-Struktur ein
  const appDiv = document.getElementById("app");
  appDiv.appendChild(nameInput);
  appDiv.appendChild(difficultySelect);
  appDiv.appendChild(startButton);

  // Füge einen Event Listener zum Start-Button hinzu
  startButton.addEventListener("click", function () {
    const playerName = nameInput.value;
    const selectedDifficulty = difficultySelect.value;
    startGame(playerName, selectedDifficulty, gameboard);
  });
}

// Funktion, die aufgerufen wird, wenn der Start-Button geklickt wird
function startGame(playerName, selectedDifficulty, gameboard) {
  gameboard.createCards(selectedDifficulty);
  gameboard.shuffleArray();
  gameboard.createVisualCards(selectedDifficulty);
  displayPlayerInfo(playerName, selectedDifficulty);
  removeMainMenu();
  gameboard.addBackToCard();
}

//Funktion zum entfernen des Menüs nachdem das Spiel gestartet wurde
function removeMainMenu() {
  const appDiv = document.getElementById("app");
  const menuElements = appDiv.querySelectorAll(
    ".input-field, .select-field, .start-button"
  );

  // Entferne jedes Menüelement aus der DOM-Struktur
  menuElements.forEach((element) => {
    appDiv.removeChild(element);
  });
}

//Zeige Name und Schwierigkeit an
function displayPlayerInfo(playerName, selectedDifficulty) {
  const playerInfoDiv = document.createElement("div");
  playerInfoDiv.className = "player-info";
  playerInfoDiv.textContent = `Spieler: ${playerName} - Schwierigkeit: ${selectedDifficulty}`;

  const appDiv = document.getElementById("app");
  appDiv.appendChild(playerInfoDiv);
}

//Erstellt den Win-Screen
function createWinScreen() {
  const appDiv = document.getElementById("app");
  const winDiv = document.createElement("div");
  winDiv.className = "winDiv";
  winDiv.id = "win-overlay";
  const winScreen = document.createElement("div");
  winScreen.className = "winScreen-content";
  const winningMessage = document.createElement("h1");
  winningMessage.className = "winningMessage";
  winningMessage.textContent = "Du hast gewonnen";
  const restartButton = document.createElement("button");
  restartButton.id = "restartButton";
  restartButton.innerHTML = "Start another round";
  appDiv.appendChild(winDiv);
  winDiv.appendChild(winScreen);
  winScreen.appendChild(winningMessage);
  winScreen.appendChild(restartButton);
  showWinOverlay();
  restartButton.addEventListener("click", function () {
    location.reload();
  });
}

//Zeigt das Win-Screen Overlay
function showWinOverlay() {
  const winOverlay = document.getElementById("win-overlay");
  winOverlay.style.display = "flex";
}

//Versteckt das Win-Screen Overlay bis die Bedingung eintrifft
function hideWinOverlay() {
  const winOverlay = document.getElementById("win-overlay");
  winOverlay.style.display = "none";
}

export { createMainMenu, createWinScreen, showWinOverlay, hideWinOverlay };
