const defaultArray = [
  {
    name: 'Таня',
    age: '37',
    weight: '65',
    height: 165,
  },
  {
    name: 'Sandrов',
    age: '31',
    weight: '60',
    height: 175,
  },
  {
    name: 'Саша',
    age: '18',
    weight: '48',
    height: 132,
  },
  {
    name: 'Дима',
    age: '32',
    weight: '100',
    height: 185,
  },
  {
    name: 'Юлят',
    age: '83',
    weight: '120',
    height: 155,
  },
  {
    name: 'Булгаков',
    age: '67',
    weight: '98',
    height: '183',
  },
]

// ===.map() всегда возвращает новый масив такой же длинны как и исходный

let result = defaultArray.map((elem) => elem.name)
console.log(`.map()`, result)

result = defaultArray.map((elem) => elem.name.includes('Т'))
console.log(`.map()`, result)

//=== filter()всегда возвращает новый массив но его длинна
//  соответствует количеству елементов которые прошли условие

result = defaultArray.filter((elem) => elem.name.includes('а'))
console.log(`.filter(name)`, result)

result = defaultArray.filter((elem) => elem.height === 185)
console.log(`.filter(height)`, result)

result = defaultArray.filter((elem) => {
  return elem.age >= 18 && elem.age <= 70
})
console.log(`.filter(age)`, result)

result = defaultArray.filter((elem) => {
  let condition = elem.name.includes('ов')
  return condition
})
console.log(`.filter()`, result)

//=== find() возвращает первый элемент который прошел проверку
// или undefined если проверку ни один элемент проверку не прошед

result = defaultArray.find((elem) => {
  let condition = elem.name.includes('ов')
  return elem.name.includes('ов')
})
console.log(`.find()`, result)

result = defaultArray.find((elem) => {
  let condition = elem.name.includes('z')
  return condition
})
console.log(`.find()`, result)

//===.some() = ||

result = defaultArray.some((elem) => {
  let condition = elem.name.toLowerCase().includes('т')
  return condition
})
console.log(`.some()`, result)

result = defaultArray.some((elem) => {
  let condition = typeof elem.height === 'number'
  return condition
})
console.log(`.some()`, result)

result = defaultArray.some((elem) => {
  let condition = typeof elem.age === 'number'
  return condition
})
console.log(`.some()`, result)

//===.every()= &&

result = defaultArray.every((elem) => {
  let condition = elem.name.toLowerCase().includes('т')
  return condition
})
console.log(`.every()`, result)

result = defaultArray.every((elem) => {
  let condition = typeof elem.height === 'number'
  return condition
})
console.log(`.every()`, result)

//===.reduce()

result = defaultArray.reduce((memo, elem, index, arr) => {
  //   console.log(memo, elem.age)
  let age = Number(elem.age)
  console.log(`age`, age)
  memo += age
  console.log(`memo`, memo)
  console.log(index, arr)
  return memo
}, 0)
result = Math.floor(result / defaultArray.length)
console.log(`.reduce()`, result)

result = defaultArray.reduce((memo, elem) => {
  memo.push(elem.age)
  return memo
}, [])
console.log(`.reduce()`, result)

result = defaultArray.reduce((memo, elem, idx) => {
  memo[`user-${idx + 1}`] = elem
  return memo
}, {})
console.log(`.reduce()`, result)

result = defaultArray.reduce((memo, elem) => {
  memo[`${elem.name}-age`] = elem.age
  return memo
}, {})
console.log(`.reduce()`, result)

result = defaultArray.reduce((memo, elem, idx) => {
  memo.push({ name: elem.name, age: elem.age })
  return memo
}, [])
console.log(`.reduce()`, result)
const markup = result
  .map((elem) => {
    console.log(elem)
    const card = `<li><div><p>name: ${elem.name}</p><p>age: ${elem.age}</p></div></li>`
    console.log(card)
    return card
  })
  .join('')
console.log(markup)

const itemsList = document.querySelector('.itemsList')
console.log(itemsList)
itemsList.insertAdjacentHTML('afterbegin', markup)

//=== sort() меняет исходный массив
// прежде чем сортировать исходный массив необходимо его распылить в новый [...]

result = [...defaultArray].sort((a, b) => {
  return a.age - b.age
})
console.log(`sort()`, result)
console.log(defaultArray)
console.log(result === defaultArray)

// result = defaultArray.sort((a, b) => {
//   return a.age - b.age
// })  // ТАК ДЕЛАТЬ НЕЛЬЗЯ!!!! МУТИРУЕТ ИСХОДНЫЙ МАССИВ
// console.log(result === defaultArray)
result = [...defaultArray].sort((a, b) => {
  console.log(a.name, b.name)
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
})
console.log(result)
