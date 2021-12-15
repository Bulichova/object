const form = document.querySelector('form')
// console.log(form)
// console.log(form.elements)
// console.log(form.elements.name, form.elements.name.vulue)
// console.log(form.elements.email, form.elements.email.vulue)
// console.log(form.elements.password, form.elements.password.vulue)
// console.log(form.elements.button, form.elements.button.vulue)
class User {
  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
  }
  changeEmail(value) {
    this.email = value
  }
}
// if (localStorage.getItem('users')) {
//   console.log('такие данные есть')
//   return localStorage.getItem('users')
// } else {
//   console.log('таких данных нет')
//   return []
// }

const users = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : []
form.addEventListener('submit', (event) => {
  event.preventDefault()
  //   console.log(event)
  //   //   прямой доступ к свойствам объекта события
  //   console.log(event.targert) //это ссылка на форму
  //   console.log(event.target.elements)
  //   деструктуризация объекта события
  const {
    target: {
      //это ссылка на форму
      elements: { name: inputName, email: inputEmail, password: inputPassword },
    },
  } = event
  let name = inputName.value
  let email = inputEmail.value
  let password = inputPassword.value
  //   console.log(name, email, password)
  const user = new User(name, email, password)
  let check = users.some((el) => {
    return el.email === user.email
  })
  //   console.log(`проверка на совпадение email`, check)
  if (check) {
    console.log(`пользователь зарегистрирован`)
  } else {
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
    console.log(user, users)
  }
  event.target.reset()
})
// console.log(localStorage.getItem('users'))
