const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");
const apiKey = "W4Lt21/zHp5+iGUqZu55/Q==zxxYgIA6mORtEuI5";
const apiOption = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  try {
    jokeElement.innerText = "Loading";
    btnElement.disabled = true;
    const response = await fetch(apiURL, apiOption);
    const data = await response.json();
    jokeElement.innerText = data[0].joke;
  } catch (error) {
    jokeElement.innerText = "Enternet is disconect";
  }
}
btnElement.addEventListener("click", getJoke);
