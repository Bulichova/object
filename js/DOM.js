// === 1.ДОСТУП К ЭЛЕМЕНТАМ ===

// == 1.1 доступ к одному элементу - объект
//по  selector: .class, #id, tag, потомок, ребенок

const body = document.querySelector('body') // tag
console.dir(body)

const header = document.querySelector('.header') // .class
console.dir(header)

const title = document.querySelector('#title') // #id
console.dir(title)

const id = document.getElementById('title') // #id
console.dir(id)

const form = document.querySelector('main form') // потомок
console.dir(form)

const input = document.querySelector('main form >input') // ребенок
console.dir(input)

//== 1.2 доступ к группе элементов - псевдомассив

const inputs = document.querySelectorAll('main form >input') //дети
console.dir(inputs)

const formElements = document.querySelector('main form').elements //дети
console.dir(formElements)

const allTitles = document.getElementsByClassName('title')
console.dir(allTitles)

// === 2. ИЗМЕНЕНИЯ СВОЙСТВ ЭЛЕМЕНТОВ ===

body.style.backgroundColor = 'grey' // стили
body.classList.add('title') // добавление класса
body.classList.add('input') // добавление класса
console.log(body.classList)
console.log(body.classList.contains('body')) // true проверка наличия класса
console.log(body.classList.contains('main')) //false проверка наличия класса
body.classList.replace('body', 'main') // подмена класса
console.log(body.classList)
body.classList.remove('main', 'title') // удаление класса
console.log(body.classList)
body.classList.toggle('input') // переключатель (удалили)
console.log(body.classList)
body.classList.toggle('input') //  переключатель (добавили)
console.log(body.classList)

// === 3. СОЗДАНИЕ ЭЛЕМЕНТОВ ===

// == 3.1.1 создание как DOM узлы

const button1 = document.createElement('button') // создание
const button2 = document.createElement('button') // создание
const button3 = document.createElement('button') // создание
const button4 = document.createElement('button') // создание
button1.textContent = 'click-beforBegin'
button2.textContent = 'click-afterBegin'
button3.textContent = 'click-beforeEnd'
button4.textContent = 'click-afterEnd'
const text1 = document.createElement('p')
const text2 = document.createElement('p')
const text3 = document.createElement('p')
const text4 = document.createElement('p')
text1.textContent = 'Саша'
text2.textContent = 'Таня'
text3.textContent = 'Дима'
text4.textContent = 'Боня'

// == 3.1.2 встраивание элемента в html

body.insertAdjacentElement('beforebegin', button1) // встраивание
body.before(text3) // beforebegin
body.insertAdjacentElement('afterbegin', button2) // встраивание
body.prepend(text2) // afterbegin
body.insertAdjacentElement('beforeend', button3) // встраивание
body.append(text1) // beforeend
body.insertAdjacentElement('afterend', button4) // встраивание
body.after(text4) //  afterend

button1.style.backgroundColor = 'pink'
button2.style.backgroundColor = 'violet'
button3.style.backgroundColor = 'green'
button4.style.backgroundColor = 'yellow'

// == 3.2.1  создание как строчная разметка

const link = `<a href = "#" class = "link">link</a>`
console.log(link)

const span = `<span>HA-Ha-HA</span>`

// == 3.2.2. встраивание разметки в html

body.insertAdjacentHTML('afterbegin', link)

// body.innerHTML += span // сносит все и перезаписывает!!! добавление плюса -просто добавляет
// body.innerHTML = '' // зачистка всего содержимого в body

// === 4. КЛОНИРОВАНИЕ ЭЛЕМЕНТОВ ===

// == cloneNode()

const cloneButton1 = button1.cloneNode(true) // глубокое: со всем содержимым
console.log(cloneButton1)
const cloneButton2 = button2.cloneNode(false) // неглубокое: без содержимого
console.log(cloneButton2)

// const cloneLink = link.cloneNode(true) // невозможно склонировать строчную разметку(возможно через получение доступа)

// === 5. УДАЛЕНИЕ ЭЛЕМЕНТОВ ===

body.removeChild(header)
body.removeChild(text1)
text2.remove()

