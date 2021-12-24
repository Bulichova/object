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
