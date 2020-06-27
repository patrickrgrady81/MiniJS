document.addEventListener('keydown', e => {
  let audio;
  let set = false;
  
  e.preventDefault();
  switch (e.keyCode) {
    case 65:
      audio = new Audio('./sounds/boom.wav');
      set = true;
      break;
    case 83:
        audio = new Audio('./sounds/clap.wav');
        set = true;
        break;
    case 68:
        audio = new Audio('./sounds/hihat.wav');
        set = true;
        break;
    case 70:
        audio = new Audio('./sounds/kick.wav');
        set = true;
        break;
    case 71:
        audio = new Audio('./sounds/openhat.wav');
        set = true;
        break;
    case 72:
        audio = new Audio('./sounds/ride.wav');
        set = true;
        break;
    case 74:
        audio = new Audio('./sounds/snare.wav');
        set = true;
        break;
    case 75:
        audio = new Audio('./sounds/tink.wav');
        set = true;
        break;
    case 76:
        audio = new Audio('./sounds/tom.wav');
        set = true;
        break;
  }
  if (set) audio.play();
 });