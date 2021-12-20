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
let result = defaultArray.map((elem) => elem.name);
result = defaultArray.map((elem) => elem.name.includes("T"));
result = defaultArray.filter((elem) => {
  let condition = elem.name.includes("Д");
  return condition;
});
result = defaultArray.filter((elem) => {
  let condition = elem.height === 185;
  return condition;
});
result = defaultArray.filter((elem) => {
  let condition = elem.age >= "88" || elem.age <= 32;
  return condition;
});
result = defaultArray.filter((elem) => {
  let condition = elem.name.includes("T");
  return condition;
});
result = defaultArray.find((elem) => {
  let condition = elem.name.includes("T");
  return condition;
});
result = defaultArray.find((elem) => {
  let condition = elem.name.includes("X");
  return condition;
});
result = defaultArray.every((elem) => {
  let condition = elem.name.toLocaleLowerCase().includes("t");
  return condition;
});
result = defaultArray.every((elem) => {
  let condition = typeof elem.height === "number";
  return condition;
});
result = defaultArray.some((elem) => {
  let condition = elem.name.toLocaleLowerCase().includes("t");
  return condition;
});
result = defaultArray.some((elem) => {
  let condition = typeof elem.height === "number";
  return condition;
});
result = defaultArray.some((elem) => {
  let condition = typeof elem.age === "number";
  return condition;
});
