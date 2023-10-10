import "./styles.css";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import { Card } from "./modules/cards";
import { createMainMenu } from "./modules/overlay";

let gameboard = new Gameboard();
createMainMenu(gameboard);
gameboard.createCards(selectedDifficulty);
gameboard.shuffleArray();
