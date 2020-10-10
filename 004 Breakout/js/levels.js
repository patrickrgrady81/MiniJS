import L0 from "./levels/L0.js";
import L1 from "./levels/L1.js";
import L2 from "./levels/L2.js";
import L3 from "./levels/L3.js";
  
export default class Levels { 
  constructor() { 
    this.currentLevel = 1;
    this.level = [];
    // this.level.push(new L0());
    this.level.push(new L1());
    this.level.push(new L2());
    this.level.push(new L3());
    this.totalLevels = this.level.length;
  }
}