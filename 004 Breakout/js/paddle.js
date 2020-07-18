export default class Paddle { 
  constructor(globals) { 
    this.globals = globals;
    this.width = 100;
    this.height = 12;
    this.speed = 0;
    this.pos = {};
    this.reset();

    this.keyDown = {
      left: false,
      right: false
    }

    window.addEventListener("keydown", e => {
        switch (e.keyCode) {
          case 65:
            this.keyDown.left = true;
            break;
          case 68:
            this.keyDown.right = true;
            break;
        }
      }

    );

    window.addEventListener("keyup", e => { 

        switch (e.keyCode) {
          case 65:
            this.keyDown.left = false;
            break;
          case 68:
            this.keyDown.right = false;
            break;
        }
      }
    );
  }

  reset = () => { 
    this.pos = { x: this.globals.width / 2 - this.width / 2 + 2, y: this.globals.height - 40 };
  }

  bound = () => { 
    if (this.pos.x < 0) this.pos.x = 0;
    if (this.pos.x + this.width > this.globals.width) this.pos.x = this.globals.width - this.width;
  }

  draw = (ctx) => { 
    ctx.fillStyle = "red";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  update = () => { 
    if (this.globals.gameState.running) {
      if (this.keyDown.left) {
        this.speed = -5;
      } else if (this.keyDown.right) {
        this.speed = 5;
      } else {
        this.speed = 0;
      }

      this.pos.x += this.speed;
      this.bound();
    }
  }
}