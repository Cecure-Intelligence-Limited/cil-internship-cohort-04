interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const btnSubmit = document.querySelector(".todo-submit") as HTMLButtonElement;
const inputTodo = document.querySelector(".todo-input") as HTMLInputElement;
const formTodo = document.querySelector(".todo-form") as HTMLFormElement;
const todoList = document.querySelector(".todo-list")!;
const btnDeleteAll = document.querySelector(
  ".todo-delete-all"
) as HTMLButtonElement;

//  HANDLE SUBMIT FN
const handleSubmit = (e: Event) => {
  e.preventDefault();
  // NEW TODO OBJ
  const newTodo: Todo = {
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
const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
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
const appendTodo = (newTodo: Todo) => {
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
  todoList?.prepend(newLi);
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
