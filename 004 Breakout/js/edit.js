export default class Edit { 
  constructor() { 
    window.addEventListener("mousedown", e => { 
      console.log(`${e.layerX - 40}, ${e.layerY - 10}`);
    });
  }
}