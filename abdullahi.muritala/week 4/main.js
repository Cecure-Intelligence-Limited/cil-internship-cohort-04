// Handle the theme switching logic

let toggle = document.querySelector('#theme-toggle');

let storedTheme =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme);

const handleThemeToggle = () => {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  let targetTheme = 'light';

  if (currentTheme === 'light') {
    targetTheme = 'dark';
  }

  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
};

toggle.addEventListener('click', handleThemeToggle);

// Array to hold all tasks
let tasks = [];
const todos = document.querySelector('#todos');

// Declare the task class

class Task {
  constructor(title, checklist) {
    this.title = title;
    this.checklist = checklist;
  }

  addToTasks() {
    tasks.push(this);
  }
}

const newTaskForm = document.querySelector('#newTaskForm');
const taskCount = document.querySelector('.controls span');

const addNewTask = (event) => {
  event.preventDefault();
  const title = document.querySelector('#newTodo').value;
  const checklist = undefined;
  const newTask = new Task(title, checklist);
  newTask.addToTasks();
  saveToLocalStorage();
  renderTodos();
  document.querySelector('#newTaskForm').reset();
};
newTaskForm.addEventListener('submit', addNewTask);

// Helper function to clear the ul
const clearContent = (content) => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

const renderTodos = () => {
  clearContent(todos);
  tasks.map(render);
};

// Map over the tasks array to render the todo items in todo unordered list

const render = (obj) => {
  // Create the Todo Item Div and its contents
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');
  if (obj.checklist === 'done') todoItem.classList.add('completed');

  let checkLabel = document.createElement('label');
  checkLabel.classList.add('check-label');

  let checkbox = document.createElement('input');
  if (obj.checklist === 'done') checkbox.checked = true;
  checkbox.type = 'checkbox';

  let roundSpan = document.createElement('span');
  roundSpan.classList.add('round');

  let title = document.createElement('li');
  title.classList.add('todo');
  title.textContent = obj.title;

  let delBtn = document.createElement('button');
  let crossIcon = document.createElement('img');
  crossIcon.src = './assets/icons/icon-cross.svg';
  crossIcon.alt = 'delete';

  // Append all the contents to todoItem
  checkLabel.append(checkbox, roundSpan);
  delBtn.appendChild(crossIcon);

  todoItem.append(checkLabel, title, delBtn);

  todos.appendChild(todoItem);

  // Always update the UI with latest tasks array count
  taskCount.textContent = `${tasks.length} items left`;
};

const saveToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const restoreLocalStorage = () => {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks === null) tasks = [];
  tasks.map(render);
};

// Call this on starting the app
restoreLocalStorage();

const deleteTask = (event) => {
  if (!event.target.matches('IMG')) return;
  let targetTitle = event.target.parentNode.parentNode.children[1].outerText;
  for (let i = 0; i < tasks.length; i++) {
    if (targetTitle === tasks[i].title) {
      tasks.splice(i, 1);
    }
  }
  saveToLocalStorage();
  clearContent(todos);
  tasks.map(renderTodos);
};

todos.addEventListener('click', deleteTask);

const toggleDone = (event) => {
  if (!event.target.matches('INPUT')) return;
  let targetTitle = event.target.parentNode.parentNode.children[1].outerText;
  for (let i = 0; i < tasks.length; i++) {
    if (targetTitle === tasks[i].title) {
      if (tasks[i].checklist === 'done') {
        tasks[i].checklist = undefined;
      } else {
        tasks[i].checklist = 'done';
      }
    }
  }
  saveToLocalStorage();
  clearContent(todos);
  tasks.map(renderTodos);
};

todos.addEventListener('click', toggleDone);

const clearCompletedBtn = document.querySelector('#clearCompletedBtn');

const clearCompletedTasks = () => {
  const remainingTasks = tasks.filter((task) => !task.checklist);
  tasks = [...remainingTasks];
  saveToLocalStorage();
  clearContent(todos);
  tasks.map(renderTodos);
};

clearCompletedBtn.addEventListener('click', clearCompletedTasks);

const completedTasksBtn = document.querySelector('#completedTasksBtn');

const filterCompletedTasks = () => {
  const completedTasks = tasks.filter((task) => task.checklist);
  clearContent(todos);
  completedTasks.map(render);
};

completedTasksBtn.addEventListener('click', filterCompletedTasks);

const activeTasksBtn = document.querySelector('#activeTasksBtn');

const filterActiveTasks = () => {
  const activeTasks = tasks.filter((task) => !task.checklist);
  clearContent(todos);
  activeTasks.map(render);
};

activeTasksBtn.addEventListener('click', filterActiveTasks);

const allTasksBtn = document.querySelector('#allTasksBtn');

allTasksBtn.addEventListener('click', renderTodos);
