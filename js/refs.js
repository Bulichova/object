const form = document.querySelector("form");
// console.log(form);
// console.log(form.elements);
// console.log(form.elements.name, form.elements.name.value);
// console.log(form.elements.email, form.elements.email.value);
// console.log(form.elements.password, form.elements.password.value);
// console.log(form.elements.button, form.elements.button.value);
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  changeEmail(value) {
    this.email = value;
  }
}
// if (localStorage.getItem("users")) {
//   console.log("Такие данные есть");
//   return localStorage.getItem("users");
// } else {
//   console.log("таких данных нет");
//   return [];
// }

const users = [
  localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [],
];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event);
  //   //прямой доступ к свойствам обьекта события
  //   console.log(event.target); //ссылка на форму
  //   console.log(event.target.elements);
  //   //   Дестр обьекта события
  const {
    target: {
      //ссылка на форму
      elements: { name: inputName, email: inputEmail, password: inputPassword },
    },
  } = event;
  //   console.log(name, email, password);
  //   const user = {
  let name = inputName.value;
  let email = inputEmail.value;
  let password = inputPassword.value;
  //     name: name.value,
  //     email: email.value,
  //     password: password.value,
  //   };
  const user = new User(name, email, password);
  let check = users.some((el) => {
    return el.email === user.email;
  });
  //   console.log("проверка на совпадение email:", check);
  if (check) {
    console.log("Пользователь зареган");
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(user, users);
  }

  event.target.reset();
});
console.log(localStorage.getItem("users"));
