import './styles/normalize.css';
import './styles/index.css';
import TaskInterface from './task';
import Task from './task';

export let tasks: TaskInterface[] = [];
let toggle = document.querySelector('#theme-toggle') as HTMLButtonElement;

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

toggle.addEventListener('click', handleThemeToggle);
