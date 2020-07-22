const run = () => { 
  const answer = Math.floor(Math.random() * 100 + 1);
  let guesses = [];
  let win = false;
  let total = 0;

  const btn = document.getElementById("btn");
  btn.addEventListener("click", e => { 
    e.preventDefault();
    const input = document.getElementById("input");
    const results = document.getElementById("results");
    const domGuesses = document.getElementById("guesses");

    if (!win) {
      if (parseInt(input.value) > 100 || parseInt(input.value) < 1) {
        results.innerText = "Not valid input, try again"
      } else {
        total++;
        if (answer > input.value) {
          results.innerText = "Higher";
        } else if (answer < input.value) {
          results.innerText = "Lower";
        } else {
          results.innerText = `You Win in ${total} Moves`
          win = true;
          btn.disabled = true;
        }
        guesses.push(parseInt(input.value));
        domGuesses.innerText = `Guesses: ${guesses}`;
        input.value = "";
        input.focus();
      }
    } else { 
      win = false;
      btn.innerText = "Go!";
      results.innerText = "";
      guesses = [];
      // domGuesses.innerText = "";
      // run();
    }
  });
}

window.addEventListener("DOMContentLoaded", run);