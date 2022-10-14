"use strict";
exports.__esModule = true;
//Selector
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');
var filterOption = document.querySelector('.filter-todo');
//Event Listers
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodos);
//Functions
function addTodo(e) {
    e.preventDefault();
    //create div with a class of todo
    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //cretae li
    var newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    // put li in the todoDiv
    todoDiv.appendChild(newTodo);
    //Create Check mark button
    var completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML = '<i class="bi bi-check-lg"></i>';
    // put check button in the todoDiv
    todoDiv.appendChild(completedButton);
    //Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('trash-btn');
    deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
    // put delete button in the todoDiv
    todoDiv.appendChild(deleteButton);
    //append todoDiv to html ul when input has a value
    todoInput.value && todoList.appendChild(todoDiv);
    //reset the imput to nothing after submition
    todoInput.value = "";
}
function deleteCheck(e) {
    var item = e.target;
    //Delete Todo
    if (item.classList[0] === "trash-btn") {
        var todo = item.parentElement;
        todo.remove();
    }
    else if (item.classList[0] === "complete-btn") {
        var todo = item.parentElement;
        todo.classList.add('completed');
    }
}
function filterTodos(e) {
    var todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
        }
    });
}
