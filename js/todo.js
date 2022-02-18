const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoListArea = document.querySelector("#todo-list")

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function delList(event) {
    const li = event.target.parentElement;

    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

function paintList(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const todo = document.createElement("span");
    todo.innerText = newTodo.text;
    const del = document.createElement("button");
    del.innerText = `delete`;
    del.addEventListener("click", delList)

    li.appendChild(todo);
    li.appendChild(del);
    todoListArea.appendChild(li);
}

function inputTodoList(event) {
    if(todoInput.value.length === 0){
        event.preventDefault();
        todoInput.placeholder = "write something to do";
    }else{
    event.preventDefault();

    const newTodo = todoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };

    toDos.push(newTodoObj);
    paintList(newTodoObj);
    saveToDos();

    todoInput.value = "";
    }
}


todoForm.addEventListener("submit", inputTodoList);

const savedToDos = localStorage.getItem(TODOS_KEY);
const parseToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

if (savedToDos !== null) {
    parseToDos.forEach(paintList);
    toDos = parseToDos;
};