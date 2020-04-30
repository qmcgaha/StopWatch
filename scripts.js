function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.querySelector('.clock').textContent = time;
}

time = displayTime();
const createClock = setInterval(displayTime, 1000);

function timeFunction() {
  for (let i = 0; i >= 0; i++)
  console.log(i)
}

//timeFunction();

startTime = Date.now();
ms = Date.now() - startTime;
