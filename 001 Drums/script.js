document.addEventListener('keydown', e => {
  let audio;
  let set = false;

  e.preventDefault();
  const selected = document.querySelectorAll(`[data-key='${e.keyCode}']`)

  if (selected.length > 0) {
    selected[0].classList.toggle("active");
    set = true;
    switch (e.keyCode) {
      case 65:
        audio = new Audio('./sounds/boom.wav');
        break;
      case 83:
        audio = new Audio('./sounds/clap.wav');
        break;
      case 68:
        audio = new Audio('./sounds/hihat.wav');
        break;
      case 70:
        audio = new Audio('./sounds/kick.wav');
        break;
      case 71:
        audio = new Audio('./sounds/openhat.wav');
        break;
      case 72:
        audio = new Audio('./sounds/ride.wav');
        break;
      case 74:
        audio = new Audio('./sounds/snare.wav');
        break;
      case 75:
        audio = new Audio('./sounds/tink.wav');
        break;
      case 76:
        audio = new Audio('./sounds/tom.wav');
        break;
    }
    if (set) audio.play();
    setTimeout(() => { selected[0].classList.toggle("active") }, 300);
  }

 });