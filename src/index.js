import "./styles.css";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import { Card } from "./modules/cards";
import { createMainMenu } from "./modules/overlay";

let gameboard = new Gameboard();
gameboard.createCards();
gameboard.shuffleArray();

console.log(gameboard.stack);

createMainMenu(gameboard);
