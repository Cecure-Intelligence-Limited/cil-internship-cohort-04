"use strict";
const userInput = document.querySelector("#todo-task");
const addTodoBtn = document.querySelector(".add-todo");
const todoContainer = document.querySelector(".todo-div");
const todoLeft = document.querySelector(".curent-todo-left");
const defaultTodoText = todoLeft === null || todoLeft === void 0 ? void 0 : todoLeft.textContent;
let todoCounter = 0;
addTodoBtn === null || addTodoBtn === void 0 ? void 0 : addTodoBtn.addEventListener("click", newTodoCreation);
function newTodoCreation() {
    const inputCheck = inputValidation();
    if (inputCheck) {
        const newTodo = divsCreation();
        todoContainer === null || todoContainer === void 0 ? void 0 : todoContainer.append(newTodo);
        todoCounter++;
        todoUpdateCounter();
        if (userInput === null)
            return;
        userInput.value = "";
    }
    else {
        return;
    }
}
function inputValidation() {
    if ((userInput === null || userInput === void 0 ? void 0 : userInput.value) !== "") {
        return true;
    }
    else {
        return false;
    }
}
function divsCreation() {
    const todo = document.createElement("div");
    const checkBtn = document.createElement("div");
    const text = document.createElement("p");
    const deleteTodo = document.createElement("div");
    todo.classList.add("todo");
    checkBtn.classList.add("check-btn");
    deleteTodo.classList.add("delete-todo");
    checkBtn.innerHTML = `
    <div class="check-btn-action">
      <img src="img/icon-check.svg" alt="" />
    </div>
  `;
    text.textContent = userInput === null || userInput === void 0 ? void 0 : userInput.value;
    deleteTodo.innerHTML = `<img src="img/icon-cross.svg" alt="" />`;
    todo.append(checkBtn);
    todo.append(text);
    todo.append(deleteTodo);
    checkBtn.addEventListener("click", check);
    deleteTodo.addEventListener("click", deleteItem);
    return todo;
}
function todoUpdateCounter() {
    if (todoLeft === null)
        return;
    todoLeft.textContent = `You have ${todoCounter} unfinshed task left`;
}
function check(event) {
    var _a;
    const currentDiv = event.currentTarget;
    (_a = currentDiv.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("active");
    todoCounter--;
    todoUpdateCounter();
}
function deleteItem(event) {
    var _a, _b;
    const currentDiv = event.currentTarget;
    if (!((_a = currentDiv.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains("active"))) {
        todoCounter--;
        todoUpdateCounter();
    }
    (_b = currentDiv.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    if (todoCounter <= 0) {
        if (todoLeft === null)
            return;
        todoLeft.textContent = defaultTodoText;
    }
    else
        todoUpdateCounter();
}
