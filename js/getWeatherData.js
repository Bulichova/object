export function getWeatherData(city, apiId, innerPlace) {
  let apiFetch = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}`
  );
  innerPlace.innerHTML = "";

  return apiFetch
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      if (data.cod != 202) {
        alert(`${data.message}`);
        return;
      }
      if (data) {
        let markup = "";
        let weatherIconMarkup;
        if (data.weather.length > 0) {
          weatherIconMarkup = data.weather.map(({ icon, description }) => {
            if (icon && description) {
              return `<img width="20" src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}/"><span>${description}</span>`;
            } else {
              return null;
            }
          });

          markup = `<div><h2>${data.name}</h2>${weatherIconMarkup}${Math.round(
            data.main.temp - 273.15
          )}&deg;C</p></div>`;
        } else {
          markup = `<div><h2>${data.name}</h2><p>${Math.round(
            data.main.temp - 273.15
          )}&deg;C</p></div>`;
        }
        document
          .querySelector(".widget")
          .insertAdjacentHTML("afterbegin", markup);
        return true;
      }
    })
    .catch((error) => error);
}
