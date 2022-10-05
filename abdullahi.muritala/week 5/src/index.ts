import './styles/normalize.css';
import './styles/index.css';
import TaskInterface from './task';
import Task from './task';
import render from './render';

export let tasks: TaskInterface[] = [];
let toggle = document.querySelector('#theme-toggle') as HTMLButtonElement;
const newTaskForm = document.querySelector('#newTaskForm') as HTMLFormElement;
export const todos = document.querySelector('#todos') as HTMLUListElement;

// Handle the theme switching logic
let storedTheme: string =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme);

const handleThemeToggle = (): void => {
  let currentTheme: string | null = document.documentElement.getAttribute('data-theme');
  let targetTheme = 'light';

  if (currentTheme === 'light') {
    targetTheme = 'dark';
  }

  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
};

const addNewTask = (event: SubmitEvent): void => {
  event.preventDefault();
  const titleElement = document.querySelector('#newTodo') as HTMLInputElement;
  const title = titleElement.value;
  const checklist = undefined;
  const newTask = new Task(title, checklist);
  newTask.addToTasks();
  saveToLocalStorage();
  renderTodos();
  newTaskForm.reset();
};

// Helper function to clear the ul
const clearContent = (content: HTMLElement): void => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

const renderTodos = (): void => {
  clearContent(todos);
  tasks.map(render);
};

const saveToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const restoreLocalStorage = () => {
  const value = localStorage.getItem('tasks');
  if (typeof value === 'string') {
    tasks = JSON.parse(value);
  }
  if (tasks === null) tasks = [];
  tasks.map(render);
};

toggle.addEventListener('click', handleThemeToggle);
newTaskForm.addEventListener('submit', addNewTask);

// Call this on starting the app
restoreLocalStorage();
