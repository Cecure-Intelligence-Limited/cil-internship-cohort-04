import { todos, tasks } from './index';
import TaskInterface from './task';

const crossPath = require('./assets/icons/icon-cross.svg');

const taskCount = document.querySelector('.controls span') as HTMLSpanElement;

// Map over the tasks array to render the todo items in todo unordered list
const render = (obj: TaskInterface) => {
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
  crossIcon.src = crossPath;
  crossIcon.alt = 'delete';

  // Append all the contents to todoItem
  checkLabel.append(checkbox, roundSpan);
  delBtn.appendChild(crossIcon);

  todoItem.append(checkLabel, title, delBtn);

  todos.appendChild(todoItem);

  // Always update the UI with latest tasks array count
  taskCount.textContent = `${tasks.length} items left`;
};

export default render;
