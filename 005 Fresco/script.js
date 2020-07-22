const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const clear = document.getElementById("clear-btn");
const weight = document.getElementById("weight");

const bgColor = document.getElementById("background");
const stroke = document.getElementById("stroke");

const weightVal = document.getElementById("weightVal");

weightVal.value = weight.value;
let strokeColor = stroke.value;

stroke.addEventListener("change", e => { 
  strokeColor = stroke.value;
});

weight.addEventListener("change", e => { 
  weightVal.value = weight.value;
})

clear.addEventListener("click", e => { 
  e.preventDefault();
  clearCanvas(bgColor.value);
})

bgColor.addEventListener("change", e => {
  clearCanvas(e.target.value);
});

const clearCanvas = (color) => { 
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

let drawing = false;
let current = { x: 0, y: 0 };

canvas.addEventListener("mousedown", e => { 
  current = { x: e.layerX, y: e.layerY };
  drawing = true;
});

canvas.addEventListener("mousemove", e => { 
  if (drawing) {
    ctx.beginPath();
    ctx.moveTo(current.x, current.y);
    current = { x: e.layerX, y: e.layerY };
    ctx.lineTo(current.x, current.y);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = weightVal.value;
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", e => { 
  drawing = false;
});




