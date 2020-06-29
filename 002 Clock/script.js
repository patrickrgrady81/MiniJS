const getDate = () => { 
  const now = new Date();
  let day = now.getDay();
  const dayName = dayNames(day);
  const month = now.getMonth() + 1;
  day = now.getDate();
  const year = now.getFullYear();

  let hour = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();
  const suffix = hour > 11 || hour === 0 ? "PM" : "AM";
  hour = hour === 0 ? 12 : hour;
  hour = hour > 12 ? `${hour - 12}` : `${hour}`;
  hour = hour < 10 ? `0${hour}` : hour;
  mins = mins < 10 ? `0${mins}` : `${mins}`;
  secs = secs < 10 ? `0${secs}` : `${secs}`;

  return { hour, mins, secs, suffix, dayName, month, day, year };

}

const dayNames = (day) => { 
  switch (day) { 
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

const clearCanvas = (ctx) => { 
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const drawArm = (change, halfWidth, halfHeight, radius, length, color) => { 
  const TAU = Math.PI * 2

  const angle = TAU * change;
  let targetX = halfWidth + Math.cos(angle - (TAU/4)) * (radius * length);
  let targetY = halfHeight + Math.sin(angle - (TAU/4)) * (radius * length);

  ctx.lineWidth = 3;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(halfWidth, halfHeight);
  ctx.lineTo(targetX, targetY);
  ctx.stroke();
}

const drawClock = ({hour, secs, mins}) => { 
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  const halfWidth = canvas.width / 2;
  const halfHeight = canvas.height / 2;
  const offset = 10;
  const radius = halfWidth - offset;

  clearCanvas(ctx);

  // Face
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(halfWidth, halfHeight, radius, 0, 2 * Math.PI);
  ctx.stroke();

  // Second Hand
  drawArm(dTime.secs / 60, halfWidth, halfHeight, radius, 0.9, "red");
   // Minute Hand
  drawArm(dTime.mins / 60, halfWidth, halfHeight, radius, 0.8, "green");
  // Hour Hand
  drawArm(dTime.hour / 12, halfWidth, halfHeight, radius, 0.5, "blue");

}

const updateTime = () => { 
  dTime = getDate();
  document.getElementsByClassName("dTime")[0].innerText = `${dTime.dayName} ${dTime.month}/${dTime.day}/${dTime.year}`;
  document.getElementsByClassName("dTime")[1].innerText = `${dTime.hour}:${dTime.mins}:${dTime.secs} ${dTime.suffix}`;

  drawClock(dTime);
}

window.setInterval(updateTime, 500);



