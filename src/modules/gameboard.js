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

class Gameboard {
  constructor() {
    this.stack = [];
    this.turnedCards = [];
    this.gameContainer = document.getElementById("app");
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
    ];
  }

  createCards(selectedDifficulty) {
    let cardNum = 0;
    if (selectedDifficulty === "Leicht") {
      cardNum = 9;
    } else if (selectedDifficulty === "Mittel") {
      cardNum = 17;
    } else if (selectedDifficulty === "Schwer") {
      cardNum = 25;
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

  createVisualCards(selectedDifficulty) {
    let cardNum = 0;
    if (selectedDifficulty === "Leicht") {
      cardNum = 4;
    } else if (selectedDifficulty === "Mittel") {
      cardNum = 8;
    } else if (selectedDifficulty === "Schwer") {
      cardNum = 8;
    }
    const numberOfCardsPerRow = cardNum;

    this.gameContainer.style.display = "grid";
    this.gameContainer.style.gridTemplateColumns = `repeat(${numberOfCardsPerRow}, 100px)`;
    this.gameContainer.style.gridGap = "10px";
    this.gameContainer.style.placeItems = "center";

    this.stack.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.id = card.id;
      cardElement.innerHTML = card.matchingID;
      const front = new Image();
      front.src = angular;
      cardElement.style.backgroundImage = `url(${
        this.cardImages[card.matchingID - 1]
      })`;
      cardElement.addEventListener("click", () => this.pickCards(index));
      this.gameContainer.appendChild(cardElement);
      card.htmlElement = cardElement;
    });
  }

  addBackToCard() {
    this.stack.forEach((card, index) => {
      const cardId = card.id;
      const cardElement = document.getElementById(cardId.toString());
      cardElement.classList.add("back");
      console.log(cardElement);
    });
  }

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

  toggleCard(cardElement) {
    cardElement.classList.toggle("front");
    cardElement.classList.toggle("back");
  }

  turnBack(id1, id2) {
    const cardOne = document.getElementById(id1);
    const cardTwo = document.getElementById(id2);
    cardOne.classList.remove("front");
    cardTwo.classList.remove("front");
    cardOne.classList.add("back");
    cardTwo.classList.add("back");
    console.log(cardOne.classList);
    console.log(cardTwo.classList);
  }

  checkForPair() {
    const [card1, card2] = this.turnedCards;
    if (card1.matchingID === card2.matchingID) {
      console.log("Wir sind ein Paar");
    } else {
      console.log("Wir sind kein Paar");
      const card1Index = this.stack.indexOf(card1);
      const card2Index = this.stack.indexOf(card2);
      this.stack[card1Index].turned = false;
      this.stack[card2Index].turned = false;
      setTimeout(this.turnBack, 2000, card1.id, card2.id);
    }
    this.turnedCards = [];
  }

  wait(seconds) {
    const start = new Date().getTime();
    let endLoop = start;
    while (endLoop < start + seconds) {
      endLoop = new Date().getTime();
    }
  }

  checkForWin() {
    let z = 0;
    this.stack.forEach((card) => {
      if (card.turned == false) {
        z++;
      }
    });
    if (z == 0) {
      createWinScreen();
      console.log("Du hast gewonnen!");
    }
  }

  shuffleArray() {
    for (let i = this.stack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.stack[i], this.stack[j]] = [this.stack[j], this.stack[i]];
    }
  }
}

export { Gameboard };
