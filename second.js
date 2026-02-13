const searchBtn = document.querySelector("button");
const searchInput = document.querySelector(".searchInput");
const cityTitle = document.querySelector(".citytitle");
const box1 = document.querySelector(".box1");

async function searchWeather() {
  let city = searchInput.value.trim();

  if (city == "") {
    city = "Taraz";
  }
  try {
    const Url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    const promise = await fetch(Url);
    const data = await promise.json();

    if (!data.results) {
      alert("the city is undefined!");
      return;
    }
    const { latitude, longitude, name, country } = data.results[0];

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=auto`;
    const weatherPromise = await fetch(weatherUrl);
    const weatherData = await weatherPromise.json();

    const temp = Math.round(weatherData.current.temperature_2m);

    cityTitle.innerText = `Now's the sky looking in ${name}?`;


    const cityName = document.querySelector(".minibox1 .citytitle");
    const tempBox = document.querySelector(".minibox1 h2");


    cityName.textContent = `${name}, ${country}`;
    tempBox.textContent = `${temp}°`;
  } catch (err) {
    console.log("found some mistakes:", err);
  }
}
searchBtn.addEventListener("click", searchWeather);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchWeather();
});
searchWeather();
