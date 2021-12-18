const defaultArray = [
  {
    name: "Димон",
    age: "32",
    weight: "100",
    height: 185,
  },
  {
    name: "Sandra",
    age: "18",
    weight: "48",
    height: 185,
  },
  {
    name: "Tania",
    age: "22",
    weight: "49",
    height: 185,
  },
  {
    name: "Tony Stark",
    age: "44",
    weight: "89",
    height: 165,
  },
  {
    name: "Достоевский",
    age: "67",
    weight: "88",
    height: 155,
  },
  {
    name: "Рейх",
    age: "100",
    weight: "88",
    height: "155",
  },
];
// map- Всегда возвр новый массив такой же длинны  как и исходный массив
let result = defaultArray.map((elem) => elem.name);
console.log("map", result);

result = defaultArray.map((elem) => elem.name.includes("T"));
console.log("map", result);

// Filter  всегда возв новый массив НО его длинна соответствует кол  элем которые прошли условие
result = defaultArray.filter((elem) => {
  let condition = elem.name.includes("Д");
  return condition;
});
console.log("filterName", result);

result = defaultArray.filter((elem) => {
  let condition = elem.height === 185;
  return condition;
});
console.log("filterHeight", result);

result = defaultArray.filter((elem) => {
  let condition = elem.age >= "88" || elem.age <= 32;
  return condition;
});
console.log(result);

result = defaultArray.filter((elem) => {
  let condition = elem.name.includes("T");
  return condition;
});
console.log("filter", result);

// Find возв эллемент первый который прошёл проверку или андефайнд если ниодин эллем не прошел проверку
result = defaultArray.find((elem) => {
  let condition = elem.name.includes("T");
  return condition;
});
console.log("Find", result);

result = defaultArray.find((elem) => {
  let condition = elem.name.includes("X");
  return condition;
});
console.log(result);

// Every - вернёт тру если все элементы массива прошли проверку ,вернёт фолс если хотя бы 1н эллемент не прошёл проверку
result = defaultArray.every((elem) => {
  let condition = elem.name.toLocaleLowerCase().includes("t");
  return condition;
});
console.log("every", result);

result = defaultArray.every((elem) => {
  let condition = typeof elem.height === "number";
  return condition;
});
console.log("every", result);

// Some-  вернёт тру если хотя бы 1н элемент прошёл проверку вернет фолс если все элементы не прошли проверку
result = defaultArray.some((elem) => {
  let condition = elem.name.toLocaleLowerCase().includes("t");
  return condition;
});
console.log("some", result);

result = defaultArray.some((elem) => {
  let condition = typeof elem.height === "number";
  return condition;
});
console.log("some", result);

result = defaultArray.some((elem) => {
  let condition = typeof elem.age === "number";
  return condition;
});
console.log("some", result);
