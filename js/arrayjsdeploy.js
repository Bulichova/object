const defaultArray = [
  {
    name: 'Таня',
    age: '37',
    weight: '65',
    hright: 165,
  },
  {
    name: 'Sandrов',
    age: '31',
    weight: '60',
    hright: 175,
  },
  {
    name: 'Саша',
    age: '18',
    weight: '48',
    hright: 132,
  },
  {
    name: 'Дима',
    age: '32',
    weight: '100',
    hright: 185,
  },
  {
    name: 'Юлят',
    age: '83',
    weight: '120',
    hright: 155,
  },
  {
    name: 'Булгаков',
    age: '67',
    weight: '98',
    hright: '183',
  },
]
let result = defaultArray.map((elem) => elem.name)
result = defaultArray.map((elem) => elem.name.includes('Т'))
result = defaultArray.filter((elem) => elem.name.includes('а'))
result = defaultArray.filter((elem) => elem.hright === 185)
result = defaultArray.filter((elem) => {
  return elem.age >= 18 && elem.age <= 70
})
result = defaultArray.filter((elem) => {
  let condition = elem.name.includes('ов')
  return condition
})
result = defaultArray.find((elem) => {
  let condition = elem.name.includes('ов')
  return elem.name.includes('ов')
})
result = defaultArray.find((elem) => {
  let condition = elem.name.includes('z')
  return condition
})
result = defaultArray.some((elem) => {
  let condition = elem.name.toLowerCase().includes('т')
  return condition
})
result = defaultArray.some((elem) => {
  let condition = typeof elem.hright === 'number'
  return condition
})
result = defaultArray.some((elem) => {
  let condition = typeof elem.age === 'number'
  return condition
})
result = defaultArray.every((elem) => {
  let condition = elem.name.toLowerCase().includes('т')
  return condition
})

result = defaultArray.every((elem) => {
  let condition = typeof elem.hright === 'number'
  return condition
})
