export default class GameOver { 
  constructor(globals) { 
    this.globals = globals;

  }
  
  show = (ctx) => { 
    ctx.fillStyle = this.globals.bgColor;
    ctx.fillRect(0, 0, this.globals.width, this.globals.height);
    ctx.fillStyle = this.globals.fontColor;
    ctx.font = this.globals.font;
    ctx.fillText("Game Over", this.globals.width / 2 - 60, this.globals.height / 2 - 30);
  }
}