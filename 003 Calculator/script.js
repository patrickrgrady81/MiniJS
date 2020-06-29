evalExpression = display => { 
  console.log(display);
  return 0;
}

let allDivs = document.getElementsByClassName("cell");
let display = allDivs[0];
let displayText = "0";

for (ad of allDivs) { 
  ad.addEventListener("click", (e) => {
    let target;
    if (e.srcElement.classList[0] === "digit") {
      target = e.srcElement.parentElement.innerText;
    } else { 
      target = e.srcElement.innerText;
    }
    if (target !== "C" && target !== "=") {
      if (displayText === "0") displayText = "";
      displayText += target;
    } else if (target === "C") {
      displayText = "0";
    } else { 
      displayText = evalExpression(displayText);
    }
    display.value = displayText;
});
}
