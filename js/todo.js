const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
// const todoBtn = document.querySelector("#todo-form button");
const todoListArea = document.querySelector("#todo-list")

function inputTodoList(event){
    event.preventDefault();

    const todoList = document.createElement("li");
    todoList.innerText = todoInput.value;
    todoListArea.append(todoList);


    todoInput.value = "";

}

todoForm.addEventListener("submit", inputTodoList);