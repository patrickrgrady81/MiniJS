export default class Ball { 
  constructor(globals) { 
    this.globals = globals;
    this.size = 15;
    this.xspeed = 1.7;
    this.yspeed = 2.3;
    this.pos = { x: 0, y: 0 };
    this.reset();
  }

  reset = () => { 
    const offset = 200;
    let rx = Math.floor(Math.random() * offset);
    rx *= Math.random() > 0.5 ? -1 : 1;
    let ry = Math.floor(Math.random() * (offset / 20));
    ry *= Math.random() > 0.5 ? -1 : 1;
    this.pos.x = this.globals.width / 2 + rx;
    this.pos.y = this.globals.height / 2 + ry;
    this.xspeed *= Math.random() > 0.5 ? -1 : 1
  }

  bound = (paddle) => { 
    if (this.pos.x < 0) this.xspeed = -this.xspeed;
    if (this.pos.y < 0) this.yspeed = -this.yspeed;
    if (this.pos.x + this.size > this.globals.width) this.xspeed = -this.xspeed;
    // if it hits here, lose a life
    if (this.pos.y + this.size > this.globals.height) { 
      this.reset();
      paddle.reset();
      this.globals.lives -= 1;
      if (this.globals.lives > 0) {
        this.globals.gameState.running = false;
        this.globals.gameState.paused = true;
      } else { 
        this.globals.gameState.running = false;
        this.globals.gameState.gameOver = true;
      }
    }
  }

  draw = (ctx) => { 
    ctx.fillStyle = "blue";
    ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
  }

  update = (paddle) => { 
    if (this.globals.gameState.running) {
      this.pos.x += this.xspeed;
      this.pos.y += this.yspeed;
      this.bound(paddle);
    }
  }

  collision = (paddle) => { 
    this.yspeed = -this.yspeed;
    this.update(paddle);
  }
}