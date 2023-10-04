import "./styles.css";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import { Card } from "./modules/cards";
import { createMainMenu } from "./modules/overlay";

let gameboard = new Gameboard();
gameboard.createCards();
gameboard.shuffleArray();

gameboard.pickCards(1);
gameboard.pickCards(4);

console.log(gameboard.stack);
