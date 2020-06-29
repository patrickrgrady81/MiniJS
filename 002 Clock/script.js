const getDate = () => { 
  const now = new Date();
  let day = now.getDay();
  day = dayName(day);
  let hour = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();
  const suffix = hour > 11 || hour === 0 ? "PM" : "AM";
  hour = hour === 0 ? 12 : hour
  hour = hour > 11 ? `${hour - 12}` : `${hour}`
  hour = hour < 10 ? `0${hour}` : hour
  mins = mins < 10 ? `0${mins}` : `${mins}`
  secs = secs < 10 ? `0${secs}` : `${secs}`

  return `${hour}:${mins}:${secs} ${suffix}`;

}

const dayName = (day) => { 
  switch (day) { 
    case 0:
      return "Sunday"
    case 1:
      return "Monday"
    case 2:
      return "Tuesday"
    case 3:
      return "Wednesday"
    case 4:
      return "Thursday"
    case 5:
      return "Friday"
    case 6:
      return "Saturday"
  }
}

const updateTime = () => { 
  dTime = getDate();
  document.getElementsByClassName("dTime")[0].innerText = dTime;
}

window.setInterval(updateTime, 500);



