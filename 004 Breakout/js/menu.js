export default class Menu { 
  constructor(globals) { 
    this.globals = globals;

    window.addEventListener("keydown", e => { 
      if (e.keyCode === 32) { 
        if (this.globals.gameState.menu) {
          this.globals.gameState.menu = false;
          this.globals.unpause();
        } else if (this.globals.gameState.running) {
          this.globals.pause();
        } else if (this.globals.gameState.paused) { 
          this.globals.unpause();
        }
      }
    });
  }

  show = (ctx) => { 
    ctx.fillStyle = this.globals.fontColor;
    ctx.font = this.globals.font;
    ctx.fillText("Press Space To Continue...", this.globals.width / 2 - 152, this.globals.height / 2 - 30);
  }
}