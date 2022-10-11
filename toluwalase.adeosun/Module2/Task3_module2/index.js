"use strict";
console.log('I am good');
const form = document.querySelector('.todo_form');
const inputValue = document.querySelector('.todo_input');
const container = document.querySelector('.todo_container');
const todoItems = document.querySelector('.todo_items');
let currentActive = document.querySelector('.active');
const date = document.querySelector('.date');
let allTodos = [];
const editMode = {
    isEditing: false,
    id: null,
    editTag: '',
};
