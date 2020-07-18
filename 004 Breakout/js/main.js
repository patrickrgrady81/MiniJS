import Game from "./game.js";
import Globals from "./globals.js";
import Ball from "./ball.js";
import Paddle from "./paddle.js";
import Menu from "./menu.js";
import Edit from "./edit.js";
import Levels from "./levels.js";
import Scoreboard from "./scoreboard.js";
import GameOver from "./gameOver.js";


const run = () => { 
  const canvas = document.getElementById("canvas");
  
  const globals = new Globals(canvas);
  if (globals.edit) {
    const edit = new Edit();
  }
  const ball = new Ball(globals);
  const paddle = new Paddle(globals);
  const menu = new Menu(globals);
  const scoreboard = new Scoreboard(globals);
  const gameOver = new GameOver(globals);
  const levels = new Levels();

  const game = new Game(globals, ball, paddle, menu, scoreboard, gameOver, levels);

  game.play();
}

window.addEventListener("DOMContentLoaded", run);
