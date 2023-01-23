const loginForm= document.querySelector(".login")
const loginInput = document.querySelector(".login input")
const loginbutton = document.querySelector(".login button")

function loginSubmit() {
  const username = loginInput.value
  console.log(username)
}

loginForm.addEventListener("submit", loginSubmit)