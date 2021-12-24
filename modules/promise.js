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
