export function getWeatherData(city, apiId, innerPlace) {
  const url = fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}`,
  )
  innerPlace.innerHTML = ''
  return url
    .then((result) => {
      return result.json()
    })
    .then((data) => {
      console.log(data)
      if (data.cod != 200) {
        alert(`${data.message}`)
        return
      }
      if (data) {
        let markup = ''
        if (data.weather.length > 0) {
          let weatherIconMarkup = data.weather.map(({ icon, description }) => {
            if (icon && description) {
              return `<img width="20" src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}"/><span>${description}</span>`
            } else {
              return null
            }
          })
          if (weatherIconMarkup) {
            weatherIconMarkup = weatherIconMarkup.join('')
            markup = `<div><h2>${
              data.name
            }</h2>${weatherIconMarkup}<p>${Math.round(
              data.main.temp - 273.15,
            )}&deg;С</p></div>`
          } else {
            markup = `<div><h2>${data.name}</h2><p>${Math.round(
              data.main.temp - 273.15,
            )}&deg;С</p></div>`
          }
        } else {
          markup = `<div><h2>${data.name}</h2><p>${Math.round(
            data.main.temp - 273.15,
          )}&deg;С</p></div>`
        }
        innerPlace.insertAdjacentHTML('afterbegin', markup)
        return data
      }
    })
    .catch((error) => error)
}
