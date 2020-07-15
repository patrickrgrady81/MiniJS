import Brick from "../brick.js"

export default class L0 { 
  constructor() { 
    this.bricks = [];
    this.create();
  }

  create = () => { 
    this.bricks.push(new Brick(1, 0, 50, 800));
  }
}