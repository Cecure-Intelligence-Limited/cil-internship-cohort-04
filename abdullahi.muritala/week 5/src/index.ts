import './styles/normalize.css';
import './styles/index.css';
import TaskInterface from './task';
import Task from './task';
import render from './render';

export let tasks: TaskInterface[] = [];
let toggle = document.querySelector('#theme-toggle') as HTMLButtonElement;
const newTaskForm = document.querySelector('#newTaskForm') as HTMLFormElement;
export const todos = document.querySelector('#todos') as HTMLUListElement;
const allTasksBtn = document.querySelector('#allTasksBtn') as HTMLButtonElement;
const activeTasksBtn = document.querySelector('#activeTasksBtn') as HTMLButtonElement;
const completedTasksBtn = document.querySelector('#completedTasksBtn') as HTMLButtonElement;
const clearCompletedBtn = document.querySelector('#clearCompletedBtn') as HTMLButtonElement;

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

const saveToLocalStorage = (): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const restoreLocalStorage = (): void => {
  const value = localStorage.getItem('tasks');
  if (typeof value === 'string') {
    tasks = JSON.parse(value);
  }
  if (tasks === null) tasks = [];
  tasks.map(render);
};

const deleteTask = (event: MouseEvent): void => {
  const target = event.target as HTMLImageElement;
  if (!target.matches('IMG')) return;
  const targetTask = target?.parentNode?.parentNode?.children[1] as HTMLLinkElement;
  let targetTitle = targetTask.outerText;
  for (let i = 0; i < tasks.length; i++) {
    if (targetTitle === tasks[i].title) {
      tasks.splice(i, 1);
    }
  }
  saveToLocalStorage();
  clearContent(todos);
  tasks.map(renderTodos);
};

const toggleDone = (event: MouseEvent): void => {
  const target = event.target as HTMLInputElement;
  if (!target.matches('INPUT')) return;
  const targetTask = target?.parentNode?.parentNode?.children[1] as HTMLLinkElement;
  let targetTitle = targetTask.outerText;
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

const clearCompletedTasks = (): void => {
  const remainingTasks = tasks.filter((task) => !task.checklist);
  tasks = [...remainingTasks];
  saveToLocalStorage();
  clearContent(todos);
  tasks.map(renderTodos);
};

const filterCompletedTasks = (): void => {
  const completedTasks = tasks.filter((task) => task.checklist);
  clearContent(todos);
  completedTasks.map(render);
};

const filterActiveTasks = (): void => {
  const activeTasks = tasks.filter((task) => !task.checklist);
  clearContent(todos);
  activeTasks.map(render);
};

toggle.addEventListener('click', handleThemeToggle);
newTaskForm.addEventListener('submit', addNewTask);
todos.addEventListener('click', deleteTask);
todos.addEventListener('click', toggleDone);
clearCompletedBtn.addEventListener('click', clearCompletedTasks);
completedTasksBtn.addEventListener('click', filterCompletedTasks);
activeTasksBtn.addEventListener('click', filterActiveTasks);
allTasksBtn.addEventListener('click', renderTodos);

// Call this on starting the app
restoreLocalStorage();
