evalExpression = display => { 
  if (operation ===  "") return display;
  const [ left, right ] = display.split(operation);

  switch (operation) { 
    case "/":
      return parseInt(left) / parseInt(right);
    case "*":
      return parseInt(left) * parseInt(right);
    case "-":
      return parseInt(left) - parseInt(right);
    case "+":
      return parseInt(left) + parseInt(right);
    
  }
}

let allDivs = document.getElementsByClassName("cell");
let display = allDivs[0];
let displayText = "0";
let operation = "";
let evaled = false;

for (ad of allDivs) { 
  ad.addEventListener("click", (e) => {
    if (evaled) { 
      displayText = "0";
      evaled = false;
      operation = "";
    }
    let target;
    if (e.srcElement.classList[0] === "digit") {
      target = e.srcElement.parentElement.innerText;
    } else { 
      target = e.srcElement.innerText;
    }
    if (target !== "C" && target !== "=") {
      if (target === "/" || target === "*" || target === "-" || target === "+") { 
        if (operation === "") {
          operation = target;
        } else { 
          target = "";
        }

        
      }
      if (displayText === "0") displayText = "";
      displayText += target;
    } else if (target === "C") {
      displayText = "0";
    } else { 
      displayText = evalExpression(displayText);
      evaled = true;
    }
    display.value = displayText;
});
}
