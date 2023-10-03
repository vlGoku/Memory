import "./styles.css";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import { Card } from "./modules/cards";

let gameboard = new Gameboard();
gameboard.createCards();
gameboard.pickCards(2);

console.log(gameboard.stack);
