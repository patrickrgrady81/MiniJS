export default class Globals { 
  constructor(canvas) { 
    this.canvas = canvas
    this.width = canvas.width;
    this.height = canvas.height;
    this.bgColor = "white";
    this.lives = 3;
    this.score = 0;

    this.gameState = {
      menu: true,
      running: false,
      paused: false,
      gameOver: false
    }

    this.edit = false;

    this.fontColor = "black";
    this.font = "30px Arial";
  }

  pause = () => {
    this.gameState.running = false;
    this.gameState.paused = true;
  }

  unpause = () => { 
    this.gameState.running = true;
    this.gameState.paused = false;    
  }
}