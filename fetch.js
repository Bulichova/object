import { getWeatherData } from "./js/getWeatherData.js";
const api_key = "0e0b99c71bb372b55ae4fd3194a49bd6";
const widgetPlace = document.querySelector(".widget");
document.querySelector(".search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  let search = event.target.elements.city.value;
  if (search) {
    getWeatherData(search, api_key, widgetPlace).catch((error) => {
      console.log(error);
    });
    event.target.reset();
  } else {
    alert("Вы ничего не ввели");
  }
});
