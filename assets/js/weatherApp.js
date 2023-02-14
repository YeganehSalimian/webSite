const search = document.querySelector(".search-box");
const city = document.querySelector(".search-box input");
const msgContainer = document.querySelector(".msgContainer");
const msg = document.querySelector(".formMsg");
const msgImage = document.querySelector(".msgImg");
const error404 = document.querySelector(".not-found");

const APIKey = "a5c791819bbedb349516532674af3ea4";

search.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = city.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${APIKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const li = document.createElement("li");
      li.classList.add("city");

      const { main, name, sys, weather } = data;

      let cityTemp = Math.round(main.temp);
      msgContainer.classList.add("fadeIn");

      msg.innerHTML = `City: ${name}, Country: ${sys.country}, Temp: ${cityTemp}°C`;

      switch (weather[0]["description"]) {
        case "Clear":
          msgImage.src = "images/clear.png";
          break;
        case "rain":
          msgImage.src = "images/rain.png";
          break;
        case "snow":
          msgImage.src = "images/snow.png";
          break;
        case "clouds":
          msgImage.src = "images/cloud.png";
          break;
        case "mist":
          msgImage.src = "images/mist.png";
          break;
        case "smoke":
          msgImage.src = "images/smoke.png";
          break;
        default:
          msgImage.src = "";
      }
    })
    .catch(() => {
      console.log("error");
      msg.innerHTML = "Invalid Location";
      error404.style.display = "block";
      error404.classList.add("fadeIn");
    });
  city.value = " ";
});