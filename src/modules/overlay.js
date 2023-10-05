"use strict";
import { Gameboard } from "./gameboard";

// menu.js

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
    option.value = optionText.toLowerCase();
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
  removeMainMenu(); // Entferne das Hauptmenü nach dem Spielstart
  displayPlayerInfo(playerName, selectedDifficulty); // Zeige Spielerinformationen während des Spiels
  gameboard.createVisualCards();
  // Hier kannst du den Spielstart-Code implementieren
  console.log(
    `Spiel gestartet! Spieler: ${playerName}, Schwierigkeit: ${selectedDifficulty}`
  );
}

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

function displayPlayerInfo(playerName, selectedDifficulty) {
  const playerInfoDiv = document.createElement("div");
  playerInfoDiv.className = "player-info";
  playerInfoDiv.textContent = `Spieler: ${playerName} - Schwierigkeit: ${selectedDifficulty}`;

  const appDiv = document.getElementById("app");
  appDiv.appendChild(playerInfoDiv);
}

export { createMainMenu };
