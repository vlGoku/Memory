"use strict";
import { Card } from "./cards";

class Gameboard {
  constructor() {
    this.stack = [];
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
    let z = 0;
    this.stack[x].turned = true;
    this.stack.forEach((card) => {
      if (card.turned == true) {
        z++;
      }
      if (z % 2 == 0) {
        this.checkForPair();
      }
    });
  }

  checkForPair() {}
}

export { Gameboard };
