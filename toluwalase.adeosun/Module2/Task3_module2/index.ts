console.log('I am good');

const form = document.querySelector<HTMLFormElement>('.todo_form');
const inputValue = document.querySelector<HTMLInputElement>('.todo_input');
const container = document.querySelector<HTMLDivElement>('.todo_container');
const todoItems = document.querySelector<HTMLDivElement>('.todo_items');
let currentActive = document.querySelector<HTMLButtonElement>('.active');
const date = document.querySelector<HTMLParagraphElement>('.date');

interface TodoObeject {
  id: number;
  todo: string;
  date: number;
  isCompleted: boolean;
}
interface EditMode {
  isEditing: boolean;
  id: number;
  editTag: string;
}
let allTodos: TodoObeject[] = [];

const editMode: EditMode = {
  isEditing: false,
  id: 0,
  editTag: '',
};

const loadTodos = () => {
  const todos = localStorage.getItem('todos');
  const parsedTodo = JSON.parse(todos);
  if (parsedTodo.length > 0) {
    container.style.display = 'block';
    showItems(parsedTodo);
    allTodos = parsedTodo;
  }
};

const dateTime = () => {
  const day = new Date().toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    second: '2-digit',
  });
  return day;
};

setInterval(() => {
  date.textContent = dateTime();
}, 1000);
date.textContent = dateTime();

const submitHandler = (evt) => {
  evt.preventDefault();

  const formValue = inputValue.value;

  if (formValue.trim() !== '') {
    if (!editMode.isEditing) {
      const todoObject = {
        id: Date.now(),
        todo: formValue,
        date: dateTime(),
        isCompleted: false,
      };
      allTodos.push(todoObject);

      'All' === 'Active';
      // filtering
      // run function
      if (currentActive.textContent === 'Active') {
        const activeTodos = allTodos.filter((item) => !item.isCompleted);
        showItems(activeTodos);
      } else if (currentActive.textContent !== 'Completed') {
        showItems(allTodos);
      }
      container.style.display = 'block';
      // inputValue.value = "";
    } else {
      const id = editMode.id;
      const updatedTodo = allTodos.find((item) => item.id === +id);
      console.log(updatedTodo);
      updatedTodo.todo = formValue;
      editMode.editTag.textContent = formValue;
      editMode.id = '';
      editMode.editTag = '';
      editMode.isEditing = false;
    }
    inputValue.value = '';
  }
  localStorage.setItem('todos', JSON.stringify(allTodos));
};

const showItems = (todos) => {
  todoItems.innerHTML = '';
  todos.forEach((item) => {
    const todo = `<div class="todo_item" data-id=${item.id}>
            <input type="checkbox" hidden id="todo-${item.id}" class="todo_checkbox" />
            <label class="circle todo_label" for="todo-${item.id}"> </label>
            <p>
                <span class="text-typo">${item.todo}</span>
                <span class="text-time text-typo">${item.date}</span>
            </p>
            <div class="todo_btns">
              <button onclick="rename(event)">Rename</button>
              <button onclick="deleteTodo(event)"> Delete</buttosn>
            </div>
          </div>`;
    todoItems.insertAdjacentHTML('afterbegin', todo);
  });
  if (currentActive.textContent == 'All') {
    showCompleted(todos);
  }
};

todoItems.addEventListener('click', (evt) => {
  if (evt.target.nodeName !== 'LABEL') return;
  console.log(evt);
  const id = evt.target.htmlFor.split('-')[1];

  const input = evt.target.previousElementSibling;
  const todoCompleted = evt.target.nextElementSibling.firstElementChild;
  if (!input.checked) {
    toggleCompleted(todoCompleted, true, id, 'line-through');
  } else {
    toggleCompleted(todoCompleted, false, id, 'none');
  }

  const page = currentActive.textContent;

  if (page === 'Active') {
    // GET THE EVENT TARGET
    // TRAVERSE UP THE CLOSEST .todo_item class
    // USE REMOVECHILD FUNCTION TO REMOVE THE DIV
    // UPDATE THE STATE

    const anything = evt.target.closest('.todo_item');
    anything.parentNode.removeChild(anything);
    toggleCompleted(todoCompleted, true, id, 'line-through');
  }

  if (page === 'Completed') {
    const div = evt.target.closest('.todo_item');
    div.parentNode.removeChild(div);
    toggleCompleted(todoCompleted, false, id, 'none');
  }
});

const toggleCompleted = (todoCompleted, boolean, id, style) => {
  const updatedTodos = allTodos.map((item) => {
    if (item.id === +id) item.isCompleted = boolean;
    return item;
  });
  allTodos = updatedTodos;
  console.log(allTodos);
  localStorage.setItem('todos', JSON.stringify(allTodos));
  todoCompleted.style.textDecoration = style;
};

// Edit Functionality
const rename = (evt) => {
  const parentElement = evt.target.closest('.todo_item');
  const textContent = parentElement.children[2].firstElementChild.textContent;
  inputValue.value = textContent;
  inputValue.focus();
  editMode.isEditing = true;
  editMode.id = parentElement.dataset.id;
  editMode.editTag = parentElement.children[2].firstElementChild;
  console.log(editMode);
};

// Delete Functionality
const deleteTodo = (evt) => {
  console.log(evt);
  const div = evt.target.closest('.todo_item');
  div.parentNode.removeChild(div);
  const id = div.dataset.id;
  const updatedTodos = allTodos.filter((item) => item.id !== +id);
  allTodos = updatedTodos;
  localStorage.setItem('todos', JSON.stringify(allTodos));
  console.log(allTodos);
  console.log(updatedTodos);
  if (allTodos.length === 0) {
    container.style.display = 'none';
  }
};

const changeActiveClass = (evt) => {
  currentActive.classList.remove('active');
  // Add .active to the element that was clicked
  evt.target.classList.add('active');
  // Set the currentActive variable to the element that was clicked
  currentActive = evt.target;
};

const showCompleted = (todos) => {
  todos.forEach((item) => {
    if (item.isCompleted === true) {
      const children = todoItems.children;
      console.log(children);
      for (let key of children) {
        if (+key.dataset.id === +item.id) {
          console.log(key);
          key.children[2].firstElementChild.style.textDecoration =
            'line-through';
          key.children[1].style.backgroundImage =
            'linear-gradient(to bottom right, #76b6fb 50%, #a27beb 40%)';
        }
      }
    }
  });
};
// Active Todos
const activeTodos = (evt) => {
  changeActiveClass(evt);
  const active = allTodos.filter((item) => !item.isCompleted);
  showItems(active);
  console.log(active);
};

const allTodo = (evt) => {
  changeActiveClass(evt);
  showItems(allTodos);
  console.log(allTodos);
  showCompleted(allTodos);
};

const compeletedTodos = (evt) => {
  changeActiveClass(evt);
  const completed = allTodos.filter((item) => item.isCompleted);
  showItems(completed);
  showCompleted(completed);
};

loadTodos();
