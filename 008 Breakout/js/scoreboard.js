export default class Scoreboard { 
  constructor(globals) { 
    this.globals = globals;
    this.canvas = document.getElementById("scoreboard");
    this.ctx = scoreboard.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }
  
  show = (level, left) => { 
    this.ctx.fillStyle = this.globals.bgColor;
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    this.ctx.fillStyle = this.globals.fontColor;
    this.ctx.font = this.globals.font;
    this.ctx.fillText(`Level: ${level}`, 90, this.height / 2 + 8);
    this.ctx.fillText(`Lives: ${this.globals.lives}`, 260, this.height / 2 + 8);
    this.ctx.fillText(`Bricks: ${left}`, 420, this.height / 2 + 8);
    this.ctx.fillText(`Score: ${this.globals.score}`, this.width - 200, this.height / 2 + 8);
  }
}
