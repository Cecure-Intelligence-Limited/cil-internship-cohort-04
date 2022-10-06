"use strict";
const btnSubmit = document.querySelector(".todo-submit");
const inputTodo = document.querySelector(".todo-input");
const formTodo = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const btnDeleteAll = document.querySelector(".todo-delete-all");
//  HANDLE SUBMIT FN
const handleSubmit = (e) => {
    e.preventDefault();
    // NEW TODO OBJ
    const newTodo = {
        id: Date.now(),
        todo: inputTodo.value,
        completed: false,
    };
    // TODO: SAVE TODO TO LOCAL STORAGE
    todos.push(newTodo);
    saveTodos();
    // APPEND TODO FN
    appendTodo(newTodo);
    // RESET INPUT VALUE
    inputTodo.value = "";
};
//  TODOS ARRAY
const todos = JSON.parse(localStorage.getItem("todos") || "[]");
console.log(todos);
//  APPEND TODOS TO DOM
window.addEventListener("DOMContentLoaded", () => {
    todos.forEach((todo) => appendTodo(todo));
});
// SAVE FN
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
//  APPEND TODO FN
const appendTodo = (newTodo) => {
    // APPEND NEW TODO TO THE DOM
    // Create new LI and Checkbox
    const newLi = document.createElement("li");
    const checkB = document.createElement("input");
    checkB.type = "checkbox";
    checkB.checked = newTodo.completed;
    // ADD CHECKBOX EVENT LISTENER
    checkB.onchange = () => {
        console.log(checkB.checked);
        newTodo.completed = checkB.checked;
        // SAVE CHANGES TO LOCAL STORAGE
        saveTodos();
    };
    // APPEND NEW TODO TO THE DOM
    newLi.append(newTodo.todo, checkB);
    todoList === null || todoList === void 0 ? void 0 : todoList.prepend(newLi);
};
// ADD FORM EVENT LISTENER
formTodo.addEventListener("submit", (e) => handleSubmit(e));
//  DELETE ALL TODOS
const clearTodos = () => {
    todos.length = 0;
    saveTodos();
    todoList.innerHTML = "";
};
btnDeleteAll.onclick = () => clearTodos();
