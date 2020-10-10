class Reel { 
  constructor(ctx, id) { 
    this.ctx = ctx;
    this.id = id;
    this.width = 150;
    this.height = 400;
    this.speed = 0;
    this.maxSpeed = 30;
    this.delta = 5 + id;

  }

  clear = () => { 
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0,0,this.width,this.height);
  }

  start = () => { 
    // console.log(`reel${this.id} starting...`);
  }

  stop = () => { 
    
  }

  
}

const createReels = () => { 
  let i = 1;
  canvasReels = document.getElementsByClassName("reel");
  for (reel of canvasReels) { 
    ctx = reel.getContext("2d");
    reels.push(new Reel(ctx, i));
    i++;
  }
}

const clearReels = () => { 
  reels.forEach(reel => { 
    reel.clear();
  });
}

const spinReels = () => { 
  win = 0;
  const rand = Math.random();
  // calculate win
  if (rand >= 0.99) {
    win = 3;
  } else if (rand >= 0.95) {
    win = 2;
  } else if (rand >= 0.90) {
    win = 1;
  } else { 
    win = 0;
  }
  odds[win]++;
  reels.forEach(reel => { 
    reel.start();
  });
}

const reels = [];
let odds = [0,0,0,0]
createReels();
clearReels();




const spin = document.getElementById("spin");

spin.addEventListener("click", e => {
  odds = [0,0,0,0];
  for (let i = 0; i < 1000; i++) {
    spinReels();
  }
  console.log(odds);
 });