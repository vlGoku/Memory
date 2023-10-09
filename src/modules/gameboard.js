"use strict";
import { Card } from "./cards";
import { createWinScreen, showWinOverlay, hideWinOverlay } from "./overlay";

class Gameboard {
  constructor() {
    this.stack = [];
    this.turnedCards = [];
    this.gameContainer = document.getElementById("app");
    this.cardImages = [
      "/img/dog-solid.svg",
      "/img/dove-solid.svg",
      "/img/dragon-solid.svg",
      "/img/fish-fins-solid.svg",
      "/img/hippo-solid.svg",
      "/img/paw-solid.svg",
      "/img/spider-solid.svg",
      "/img/aurelia.svg",
      "/img/js-badge.svg",
    ];
  }

  createCards() {
    let z = 1;
    for (let i = 1; i < 17; i += 2) {
      for (let j = 0; j < 2; j++) {
        let card = new Card(i + j, z);
        this.stack.push(card);
      }
      z++;
    }
  }

  createVisualCards() {
    this.shuffleArray(this.cardImages);
    const numberOfCardsPerRow = 8;

    this.gameContainer.style.display = "grid";
    this.gameContainer.style.gridTemplateColumns = `repeat(${numberOfCardsPerRow}, 100px)`;
    this.gameContainer.style.gridGap = "10px";
    this.gameContainer.style.placeItems = "center";

    this.stack.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.classList.add("back");
      cardElement.id = card.id;
      cardElement.innerHTML = card.matchingID;
      cardElement.addEventListener("click", () => this.pickCards(index));
      this.gameContainer.appendChild(cardElement);
      card.htmlElement = cardElement;
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
    this.toggleCard(cardOne);
    this.toggleCard(cardTwo);
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
      this.turnBack(card1.id, card2.id);
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
