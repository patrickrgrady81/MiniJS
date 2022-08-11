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
  ctx.fillStyle = "aquamarine";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const drawArm = (angle, halfWidth, halfHeight, radius, length, color) => { 
  const TAU = Math.PI * 2;
  let targetX = halfWidth + Math.cos(angle) * (radius * length);
  let targetY = halfHeight + Math.sin(angle) * (radius * length);

  ctx.lineWidth = 3;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(halfWidth, halfHeight);
  ctx.lineTo(targetX, targetY);
  ctx.stroke();
}

const drawNumbers = (ctx, radius, halfWidth, halfHeight) => { 
  let ang;
  ctx.font = radius * 0.15 + "px mono";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for(let num = 1; num < 13; num++){
    angle = num * Math.PI / 6;
    ctx.rotate(angle);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-angle);
    ctx.fillText(num.toString(), halfWidth, halfHeight);
    ctx.rotate(angle);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-angle);
  }
}

const drawTicks = (ctx, radius, halfWidth, halfHeight) => { 
  for (var i = 0; i < 12; i++) {
    angle = (i - 3) * (Math.PI * 2) / 12;
    ctx.lineWidth = 1;
    ctx.beginPath();

    var x1 = halfWidth + Math.cos(angle) * (radius);
    var y1 = halfHeight + Math.sin(angle) * (radius);
    var x2 = halfWidth + Math.cos(angle) * (radius - (radius / 10));
    var y2 = halfHeight + Math.sin(angle) * (radius - (radius / 10));

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
  
  for (var i = 0; i < 60; i++) {
    angle = (i - 3) * (Math.PI * 2) / 60;
    ctx.lineWidth = 1;
    ctx.beginPath();

    var x1 = halfWidth + Math.cos(angle) * (radius);
    var y1 = halfHeight + Math.sin(angle) * (radius);
    var x2 = halfWidth + Math.cos(angle) * (radius - (radius / 30));
    var y2 = halfHeight + Math.sin(angle) * (radius - (radius / 30));

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    ctx.strokeStyle = "black";
    ctx.stroke();
}
}

const drawClock = ({hour, secs, mins}) => { 
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  const halfWidth = canvas.width / 2;
  const halfHeight = canvas.height / 2;
  const offset = 10;
  const radius = halfWidth - offset;
  const TAU = Math.PI * 2
  let angle;

  clearCanvas(ctx);

  // Face
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(halfWidth, halfHeight, radius, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(halfWidth, halfHeight, radius * 0.05, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();

  drawTicks(ctx, radius, halfWidth, halfHeight);
  drawNumbers(ctx, radius, halfWidth, halfHeight);



  // Second Hand
  angle = ((Math.PI * 2) * (dTime.secs / 60)) - ((Math.PI * 2) / 4);
  drawArm(angle, halfWidth, halfHeight, radius, 0.9, "red");
  // Minute Hand
  angle = ((Math.PI * 2) * (dTime.mins / 60)) - ((Math.PI * 2) / 4);
  drawArm(angle, halfWidth, halfHeight, radius, 0.75, "green");
  // Hour Hand
  angle = ((Math.PI * 2) * ((dTime.hour * 5 + (dTime.mins / 60) * 5) / 60)) - ((Math.PI * 2) / 4);
  drawArm(angle, halfWidth, halfHeight, radius, 0.6, "blue");

}

const updateTime = () => { 
  dTime = getDate();
  document.getElementsByClassName("dTime")[0].innerText = `${dTime.dayName} ${dTime.month}/${dTime.day}/${dTime.year}`;
  document.getElementsByClassName("dTime")[1].innerText = `${dTime.hour}:${dTime.mins}:${dTime.secs} ${dTime.suffix}`;

  drawClock(dTime);
}

window.setInterval(updateTime, 500);



