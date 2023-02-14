const hourElement = document.getElementById("hour");
const minutesElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "صبح";

  if (h > 12) {
    h = h - 12;
    ampm = "عصر";
  }
  if (h < 10) {
    h = "0" + h;
  } else {
    h;
  }

  if (m < 10) {
    m = "0" + m;
  } else {
    m;
  }

  s = s < 10 ? "0" + s : s;

  hourElement.innerText = h;
  minutesElement.innerText = m;
  secondElement.innerText = s;
  ampmElement.innerText = ampm;
}

updateClock();
setInterval(updateClock, 1000);

const countersElement = document.querySelectorAll(".counter");

countersElement.forEach((counterEl) => {
  counterEl.innerText = "0";

  function updateCounter() {
    let firstNum = +counterEl.innerText;
    const dataCounter = counterEl.getAttribute("data");

    const stepCounter = dataCounter / 21;
    firstNum = Math.ceil(stepCounter + firstNum);

    console.log(stepCounter);
    if (firstNum < dataCounter) {
      counterEl.innerText = firstNum;
      setTimeout(updateCounter, 60);
    } else {
      counterEl.innerText = dataCounter;
    }
  }
  updateCounter();
});
