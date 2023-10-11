import "./styles.css";
import { Gameboard } from "./modules/gameboard";
import { createMainMenu } from "./modules/overlay";

let gameboard = new Gameboard();
createMainMenu(gameboard);
