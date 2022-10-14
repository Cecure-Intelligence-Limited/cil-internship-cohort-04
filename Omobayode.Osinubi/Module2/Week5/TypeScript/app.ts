export {};
//Selector
const todoInput = document.querySelector('.todo-input') as HTMLInputElement;
const todoButton = document.querySelector('.todo-button') as HTMLButtonElement;
const todoList = document.querySelector('.todo-list')!;
const filterOption = document.querySelector('.filter-todo') as HTMLSelectElement;

//Event Listers
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodos);

//Functions
function addTodo(e: Event){
  e.preventDefault();
  //create div with a class of todo
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //cretae li
  const newTodo = document.createElement('li');
  newTodo.classList.add('todo-item')
  newTodo.innerText = todoInput.value; 
  // put li in the todoDiv
  todoDiv.appendChild(newTodo);

  //Create Check mark button
  const completedButton = document.createElement('button');
  completedButton.classList.add('complete-btn');
  completedButton.innerHTML = '<i class="bi bi-check-lg"></i>';
  // put check button in the todoDiv
  todoDiv.appendChild(completedButton)

  //Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('trash-btn');
  deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
  // put delete button in the todoDiv
  todoDiv.appendChild(deleteButton)

  //append todoDiv to html ul when input has a value
  todoInput.value && todoList.appendChild(todoDiv)

  //reset the imput to nothing after submition
  todoInput.value = ""
}
function deleteCheck(e){
  const item = e.target;
  //Delete Todo
  if (item.classList[0] === "trash-btn"){
    const todo = item.parentElement as HTMLDivElement;
    todo.remove();
  }else if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement as HTMLDivElement;
    todo.classList.add('completed');
  }
}
function filterTodos(e){
  const todos:any = todoList.childNodes;
  todos.forEach((todo) => {
    switch(e.target.value){
      case "all":
        todo.style.display = "flex"!;
        break;
      case 'completed':
        if(todo.classList.contains('completed')){
          todo.style.display = "flex"
        }else{
          todo.style.display = "none"
        }
        break;
      case 'uncompleted':
        if(!todo.classList.contains('completed')){
          todo.style.display = "flex"
        }else{
          todo.style.display = "none"
        }
    }
  });
}

