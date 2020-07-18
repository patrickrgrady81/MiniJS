import Brick from "../brick.js"

export default class L1 { 
  constructor() { 
    this.bricks = [];
    this.create();
  }

  create = () => { 
    this.bricks.push(new Brick(1, 60, 65, 80));
    this.bricks.push(new Brick(2, 160, 65, 80));
    this.bricks.push(new Brick(3, 260, 65, 80));
    this.bricks.push(new Brick(4, 360, 65, 80));
    this.bricks.push(new Brick(5, 460, 65, 80));
    this.bricks.push(new Brick(6, 560, 65, 80));
    this.bricks.push(new Brick(7, 660, 65, 80));
  }
}