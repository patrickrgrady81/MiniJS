import Brick from "../brick.js"

export default class L2 { 
  constructor() { 
    this.bricks = [];
    this.create();
  }

  create = () => { 
    this.bricks.push(new Brick(1, 60, 65));
    this.bricks.push(new Brick(2, 160, 65));
    this.bricks.push(new Brick(3, 260, 65));
    this.bricks.push(new Brick(4, 360, 65));
    this.bricks.push(new Brick(5, 460, 65));
    this.bricks.push(new Brick(6, 560, 65));
    this.bricks.push(new Brick(7, 660, 65));
    this.bricks.push(new Brick(8, 60, 100));
    this.bricks.push(new Brick(9, 160, 100));
    this.bricks.push(new Brick(10, 260, 100));
    this.bricks.push(new Brick(11, 360, 100));
    this.bricks.push(new Brick(12, 460, 100));
    this.bricks.push(new Brick(13, 560, 100));
    this.bricks.push(new Brick(14, 660, 100));
  }
}