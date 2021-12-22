const appId = '100920d95c2163c457e9a44e93c3c010'
let city = 'helsinki'

const url = fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`,
)
console.log(url)
url
  .then((result) => {
    // console.log(result)
    // console.log(result.json())
    return result.json()
  })
  .then((data) => {
    console.log(data)
    const markup = `<div><h2>${data.name}</h2><p>${Math.round(
      data.main.temp - 273.15,
    )}&deg;С</p></div>`
    console.log(markup)
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup)
  })
  .catch((error) => {
    console.log(error)
  })

// Создание promise (backend)

let a = 6
const promise = new Promise((resolve, reject) => {
  if (a > 5) {
    resolve('resolve')
  } else {
    reject('error')
  }
})
console.log(promise)

// обработка promise (полученный ответ)

promise
  .then(
    (result) => {
      console.log(result)
    },
    //   (error) => {
    //     console.log(error)
    //   },
  )
  .catch((error) => {
    console.log(error)
  })

// promise (асихронный,)

//  1 pending - это ожидание,процесс выполнения promise
//  2 settlet - выполнен
//  2.1 fullField - вылнился успешно
//  2.2 reject - выполнился с ошибкой
