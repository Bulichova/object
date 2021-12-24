import { getWeatherData } from './getWeatherData.js'
const api_key = '100920d95c2163c457e9a44e93c3c010'
const widgetPlace = document.querySelector('.widget')

document.querySelector('.searchForm').addEventListener('submit', (event) => {
  event.preventDefault()
  let search = event.target.elements.city.value
  if (search) {
    getWeatherData(search, api_key, widgetPlace).catch((error) => {
      console.log(error)
    })
    event.target.reset()
  } else {
    alert(`охо хо`)
  }
})
