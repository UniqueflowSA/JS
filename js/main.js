const { link } = require("fs")

const loginForm= document.querySelector(".login")
const loginInput = document.querySelector(".login input")
const loginbutton = document.querySelector(".login button")
const welcome = document.querySelector(".welcome")

const HIDDEN_CLASSNAME = "hidden"//관습,string만으로 이루어진 변수는 대문자로. 중복되는 string을 변수로 지정해서 오류를 줄인다.
const USERNAME_KEY = "username"
const username = loginInput.value

function loginSubmit(info) {
  
  info.preventDefault() //이벤트 방지 메서드, 여기에서는 submit
  // loginForm.classList.add(HIDDEN_CLASSNAME) //HTML class login에 hidden class를 추가한다
  
  localStorage.setItem(USERNAME_KEY,username) //localStorage.setItem(value, key)
  
  console.log(username)
}
function paintWelcome (){
  
}



const savedUsername = localStorage.getItem(USERNAME_KEY)//값이 없다면 null을 내밀겠지

if(savedUsername === null){
  //show the loginForm: storage값이 null이면 loginform을 띄워주겠
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", loginSubmit) //조건부 함수 실행을 위한 것 

} else {
  //show the welcome
  welcome.classList.remove(HIDDEN_CLASSNAME)
  welcome.innerText = `hello ${savedUsername}` //변수savedUsername이 들어간 이유는 localStorage에 들어간 값이 그대로 도출되기 때문에.
}