// получить доступ
// к одному элементу- к обьекту
// по селектору: тэга, класса, айди, потомка, ребёнка
const body = document.querySelector("body");
console.log(body);

const header = document.querySelector(".header");
console.log(header);

const title = document.querySelector("#title");
console.log(title);
// или по #
const id = document.getElementById("title");
console.log(id);

const form = document.querySelector("main form");
console.log(form);

const input = document.querySelector("main form> input");
console.log(input);

// и к группе элементов- к псевдомасс
const inputs = document.querySelectorAll("main form> input");
console.log(inputs);

const formsElements = document.querySelector("main form").elements;
console.log(formsElements);

const allTitles = document.getElementsByClassName("title");
console.log(allTitles);

// изменять свойства элементов
body.style.backgroundColor = "aquamarine";
body.classList.add("title");

body.classList.add("input");
console.log(body.classList);
console.log(body.classList.contains("body"));

body.classList.replace("body", "main");
console.log(body.classList);
body.classList.remove("main", "title");
console.log(body.classList);
body.classList.toggle("input");
console.log(body.classList);
body.classList.toggle("input");
console.log(body.classList);

// создавать элементы
// как дом узлы -обьекты
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
button1.textContent = "Click-beforeBegin";
button2.textContent = "Click-afterBegin";
button3.textContent = "Click-beforeend";
button4.textContent = "Click-afterend";
button1.style.backgroundColor = "blue";
button2.style.backgroundColor = "green";
button3.style.backgroundColor = "yellow";
button4.style.backgroundColor = "grey";
const text1 = document.createElement("p");
const text2 = document.createElement("p");
const text3 = document.createElement("p");
const text4 = document.createElement("p");
text1.textContent = "Саша";
text2.textContent = "Таня";
text3.textContent = "Дима";
text4.textContent = "Боня";

// как строчная разметка
const link = `<a href="#" class="link">link</a>`;
console.log(link);

const span = `<span>Какой то текст</span>`;

// удалять
//Встроить элнмент в хтмл
body.insertAdjacentElement("beforebegin", button1);
body.before(text3);

body.insertAdjacentElement("afterbegin", button2);
body.prepend(text2);

body.insertAdjacentElement("beforeend", button3);
body.append(text1);

body.insertAdjacentElement("afterend", button4);
body.after(text4);

body.insertAdjacentHTML("afterbegin", link);
body.innerHTML += span;
// body.innerHTML = ""; //зачищает всё содержимое в боди
// body.style.backgroundColor = "aquamarine";

// клонировать
const cloneButton1 = button1.cloneNode(true); //глубокое со всем содержимым
console.log(cloneButton1);
const cloneButton2 = button2.cloneNode(false); //неглубокое без содержимого
console.log(cloneButton2);
const cloneLink = link.cloneNode(true);
