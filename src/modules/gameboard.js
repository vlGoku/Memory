"use strict";
import { Card } from "./cards";
import { createWinScreen, showWinOverlay, hideWinOverlay } from "./overlay";
import dog from "../img/dog-solid.svg";
import angular from "../img/angular.svg";
import dove from "../img/dove-solid.svg";
import dragon from "../img/dragon-solid.svg";
import aurelia from "../img/aurelia.svg";
import fish from "../img/fish-fins-solid.svg";
import hippo from "../img/hippo-solid.svg";
import paw from "../img/paw-solid.svg";
import spider from "../img/spider-solid.svg";
import ember from "../img/ember.svg";
import react from "../img/react.svg";
import vue from "../img/vue.svg";
import cow from "../img/cow-solid.svg";
import horse from "../img/horse-solid.svg";
import frog from "../img/frog-solid.svg";
import kiwi from "../img/kiwi-bird-solid.svg";
import locust from "../img/locust-solid.svg";
import otter from "../img/otter-solid.svg";

class Gameboard {
  constructor() {
    this.stack = [];
    this.turnedCards = [];
    this.gameContainer = document.getElementById("app");
    //Hier sind die Bilder für das Memory drinnen
    this.cardImages = [
      dog,
      angular,
      dove,
      dragon,
      aurelia,
      fish,
      hippo,
      paw,
      spider,
      ember,
      react,
      vue,
      cow,
      horse,
      frog,
      kiwi,
      locust,
      otter,
    ];
  }

  //Hier werden die Karten im Hintergrund je nach Schwierigkeit erstellt
  createCards(selectedDifficulty) {
    let cardNum = 0;
    if (selectedDifficulty === "Leicht") {
      //8 Karten mit 4 Paaren
      cardNum = 9;
    } else if (selectedDifficulty === "Mittel") {
      //16 Karten mit 8 Paaren
      cardNum = 17;
    } else if (selectedDifficulty === "Schwer") {
      // 24 Karten mit 12 Paaren
      cardNum = 25;
    } else if (selectedDifficulty === "Expert") {
      cardNum = 37;
    }
    let z = 1;
    for (let i = 1; i < cardNum; i += 2) {
      for (let j = 0; j < 2; j++) {
        let card = new Card(i + j, z);
        this.stack.push(card);
      }
      z++;
    }
  }

  //Erstellung der "sichtbaren" Karten
  createVisualCards(selectedDifficulty) {
    let cardNum = 0;
    if (selectedDifficulty === "Leicht") {
      cardNum = 4;
    } else if (selectedDifficulty === "Mittel") {
      cardNum = 8;
    } else if (selectedDifficulty === "Schwer") {
      cardNum = 8;
    } else if (selectedDifficulty === "Expert") {
      cardNum = 12;
    }
    const numberOfCardsPerRow = cardNum; //Hier wird die variable "cardNum" genommen,
    // um eine bestimmte Anzahl an Karten pro Reihe zu bekommen

    //Erstellung des "Spielfeldes"
    this.gameContainer.style.display = "grid";
    this.gameContainer.style.gridTemplateColumns = `repeat(${numberOfCardsPerRow}, 100px)`;
    this.gameContainer.style.gridGap = "10px";
    this.gameContainer.style.placeItems = "center";

    //Erstellung der Karten
    this.stack.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.id = card.id;
      const front = new Image();
      front.src = angular;
      cardElement.style.backgroundImage = `url(${
        this.cardImages[card.matchingID - 1]
      })`;
      cardElement.addEventListener("click", () => this.pickCards(index)); //EventListener für den klick auf die Karte
      this.gameContainer.appendChild(cardElement);
      card.htmlElement = cardElement;
    });
  }

  //Rückseite der Karte wird geaddet
  addBackToCard() {
    this.stack.forEach((card, index) => {
      const cardId = card.id;
      const cardElement = document.getElementById(cardId.toString());
      cardElement.classList.add("back");
    });
  }

  //Kartenauswahl
  pickCards(index) {
    if (this.stack[index].turned == false) {
      this.toggleCard(this.stack[index].htmlElement);
      this.stack[index].turned = true;
      this.turnedCards.push(this.stack[index]);
      if (this.turnedCards.length == 2) {
        this.checkForPair();
      }
      this.checkForWin();
    }
  }

  //Wechsel zwischen "front" & "back" Seite der Karte
  toggleCard(cardElement) {
    cardElement.classList.toggle("front");
    cardElement.classList.toggle("back");
  }

  //Hier wird die Karte wieder umgedreht
  turnBack(id1, id2) {
    const cardOne = document.getElementById(id1);
    const cardTwo = document.getElementById(id2);
    cardOne.classList.remove("front");
    cardTwo.classList.remove("front");
    cardOne.classList.add("back");
    cardTwo.classList.add("back");
  }

  //Funktion zur Prüfung der Paare
  checkForPair() {
    const [card1, card2] = this.turnedCards;
    if (card1.matchingID === card2.matchingID) {
    } else {
      const card1Index = this.stack.indexOf(card1);
      const card2Index = this.stack.indexOf(card2);
      this.stack[card1Index].turned = false;
      this.stack[card2Index].turned = false;
      setTimeout(this.turnBack, 900, card1.id, card2.id); //Hier werden die falschen Paare nach einer Sekunde wieder zurückgedreht
    }
    this.turnedCards = [];
  }

  //Funktion die einfach nur wartet
  wait(seconds) {
    const start = new Date().getTime();
    let endLoop = start;
    while (endLoop < start + seconds) {
      endLoop = new Date().getTime();
    }
  }

  //Prüfung ob man gewonnen hat
  checkForWin() {
    let z = 0;
    this.stack.forEach((card) => {
      if (card.turned == false) {
        z++;
      }
    });
    if (z == 0) {
      createWinScreen();
    }
  }

  //Hier werden die Karten im Backend gemischt
  shuffleArray() {
    for (let i = this.stack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.stack[i], this.stack[j]] = [this.stack[j], this.stack[i]];
    }
  }
}

export { Gameboard };
