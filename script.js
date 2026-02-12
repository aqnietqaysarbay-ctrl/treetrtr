let cards = document.querySelector(".cards");
let URL = "./data.json";
async function add() {
  let promise = await fetch(URL);
  let data = await promise.json();
  let hour = data.hourly_forecast;
  for (let i = 0; i < hour.length; i++) {
    let card = document.createElement("div");
    card.innerHTML = ` <div class="card">
              <div class="incard">
                <img
                  style="width: 35px; height: 35px"
                  src="${hour[i].icon}"
                  alt=""
                />
                <p>${hour[i].time}</p>
              </div>
              <p>${hour[i].temp}</p>
            </div>`;
    cards.appendChild(card);
  }
}
document.addEventListener("DOMContentLoaded", add);

let days = document.querySelector(".box3");
async function add2() {
  let promise = await fetch(URL);
  let data = await promise.json();
  let day = data.daily_forecast;
  for (let i = 0; i < day.length; i++) {
    let one = document.createElement("div");
    one.innerHTML = ` <div class="mini1">
            <p>${day[i].day}</p>
            <img
              style="width: 50px; height: 50px"
              src="${day[i].icon}"
              alt=""
            />
            <div class="deg">
              <p>${day[i].max}°</p>
              <p>${day[i].min}°</p>
            </div>
          </div>`;
    days.appendChild(one);
  }
}
document.addEventListener("DOMContentLoaded", add2);
