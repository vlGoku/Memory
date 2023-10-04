"use strict";
import { Card } from "./cards";

class Gameboard {
  constructor() {
    this.stack = [];
    this.turnedCards = [];
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

  pickCards(x) {
    this.stack[x].turned = true;
    this.turnedCards.push(this.stack[x]);
    if (this.turnedCards.length == 2) {
      this.checkForPair();
    }
    this.checkForWin();
  }

  checkForPair() {
    console.log(this.turnedCards);
    const [card1, card2] = this.turnedCards;
    if (card1.matchingID === card2.matchingID) {
      console.log("Wir sind ein Paar");
    } else {
      this.stack[card1.id - 1].turned = false;
      this.stack[card2.id - 1].turned = false;
      console.log("Wir sind kein Paar");
    }
    this.turnedCards = [];
  }

  checkForWin() {
    let z = 0;
    this.stack.forEach((card) => {
      if (card.turned == false) {
        z++;
      }
    });
    if (z == 0) {
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
