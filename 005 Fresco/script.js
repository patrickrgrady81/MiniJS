// Attach a mousedown, mousemove, and mouseup event listener to the canvas DOM

// on mousedown, get the mouse coordinates, and use the moveTo() method to position your drawing cursor and the beginPath() method to   
// begin a new drawing path.

// on mousemove, continuously add a new point to the path with lineTo(), and color the last segment with stroke().

// on mouseup, set a flag to disable the drawing.


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const clear = document.getElementById("clear-btn");
const weight = document.getElementById("weight");

const bgColor = document.getElementById("background");
const stroke = document.getElementById("stroke");

const weightVal = document.getElementById("weightVal");

weightVal.value = weight.value;
strokeColor = stroke.value;

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





