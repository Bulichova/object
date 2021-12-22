const apiId = "0e0b99c71bb372b55ae4fd3194a49bd6";
let city = "London";
let apiFetch = fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}`
);
console.log(apiFetch);
apiFetch
  .then((result) => {
    console.log(result);
    // console.log(result.json());
    return result.json();
  })
  .then((data) => {
    console.log(data);
    const markup = `<div><h2>${data.name}</h2><p>${Math.round(
      data.main.temp - 273.15
    )}&deg;C</p></div>`;
    console.log(markup);
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  })
  .catch((error) => {
    console.log(error);
  });
// создание промиса
let a = 4;
const promise = new Promise((resolve, reject) => {
  if (a > 5) {
    resolve("resolve");
  } else {
    reject("error");
  }
});
console.log(promise);
// обработка промиса
promise
  .then(
    (result) => {
      console.log(result);
    }
    //   (error) => {
    //     console.log(error);
    //   }
  )
  .catch((error) => {
    console.log(error);
  });
// pending -это ожидание
// settled- выполнен
// fullField -выполнился успешно
// reject -  выполнился с ошибкой и принёс её
