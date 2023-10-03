"use strict";

class Card {
  constructor(id, matchingID) {
    this.turned = false;
    this.id = id;
    this.matchingID = matchingID;
  }
}

export { Card };
