const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const rename = document.querySelector("#rename");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault()

    const username = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username)
}

function renameUser(event){
    event.preventDefault()
    localStorage.removeItem(USERNAME_KEY)
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    greeting.classList.add(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.children[0].innerText = `Hello ${username}`;
}

if( savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit)
}else{
    paintGreeting(savedUsername)
};

rename.addEventListener("click",renameUser)