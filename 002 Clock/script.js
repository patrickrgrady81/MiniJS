const getDate = () => { 
  const now = new Date();
  let day = now.getDay();
  day = dayName(day);
  let hour = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();
  const suffix = hour > 11 || hour === 0 ? "PM" : "AM";
  hour = hour === 0 ? 12 : hour;
  hour = hour > 11 ? `${hour - 12}` : `${hour}`;
  hour = hour < 10 ? `0${hour}` : hour;
  mins = mins < 10 ? `0${mins}` : `${mins}`;
  secs = secs < 10 ? `0${secs}` : `${secs}`;

  return { hour, mins, secs, suffix };

}

const dayName = (day) => { 
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

const drawClock = ({hour, secs, mins}) => { 
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  const halfWidth = canvas.width / 2;
  const halfHeight = canvas.height / 2;
  const offset = 10;
  const radius = halfWidth - offset;
  const TAU = Math.PI * 2
  clearCanvas(ctx);

  // Face
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(halfWidth, halfHeight, radius, 0, 2 * Math.PI);
  ctx.stroke();

  // Hour Hand
  const hAngle = TAU * (dTime.hour / 12);
  let hTargetX = halfWidth + Math.cos(hAngle - (TAU/4)) * radius;
  let hTargetY = halfHeight + Math.sin(hAngle - (TAU/4)) * radius;

  ctx.lineWidth = 3;
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(halfWidth, halfHeight);
  ctx.lineTo(hTargetX, hTargetY);
  ctx.stroke();



  // Minute Hand
  const mAngle = TAU * (dTime.mins / 60);
  let mTargetX = halfWidth + Math.cos(mAngle - (TAU/4)) * radius;
  let mTargetY = halfHeight + Math.sin(mAngle - (TAU / 4)) * radius;
  
  ctx.lineWidth = 3;
  ctx.strokeStyle = "blue";
  
  ctx.beginPath();
  ctx.moveTo(halfWidth, halfHeight); 
  ctx.lineTo(mTargetX, mTargetY); 
  ctx.stroke();

  // Second Hand
  const sAngle = TAU * (dTime.secs / 60);
  let sTargetX = halfWidth + Math.cos(sAngle - (TAU/4)) * radius;
  let sTargetY = halfHeight + Math.sin(sAngle - (TAU / 4)) * radius;
  
  ctx.lineWidth = 3;
  ctx.strokeStyle = "red";
  
  ctx.beginPath();
  ctx.moveTo(halfWidth, halfHeight); 
  ctx.lineTo(sTargetX, sTargetY); 
  ctx.stroke();
}

const updateTime = () => { 
  dTime = getDate();
  document.getElementsByClassName("dTime")[0].innerText = `${dTime.hour}:${dTime.mins}:${dTime.secs} ${dTime.suffix}`;

  drawClock(dTime);
}

window.setInterval(updateTime, 500);



