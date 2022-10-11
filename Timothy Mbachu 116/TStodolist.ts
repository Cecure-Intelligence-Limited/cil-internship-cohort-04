const addTodo = document.getElementById("add-todo");
const todoListTitle = document.getElementById("todo-list-title");
const newTodoForm = document.getElementById("new-todo-form") as HTMLFormElement;
const newTodoInput = document.getElementById(
  "form-input-new-todo"
) as HTMLInputElement;
const listClear = document.querySelector(".clear");
const todoListItems = document.querySelector(
  ".todo-list-items"
) as HTMLUListElement;
const remainingTasksCount = document.getElementById("items-count");

// create custom object type
type TaskObject = {
  title: string;
  completed: boolean;
};

// create array type to store todos

const tasks: any[] = loadTasks();

let tasksCount: any = 0;

tasks.forEach(addNewTask);

tasks.forEach((task) => {
  if (!task.completed && remainingTasksCount) {
    tasksCount += 1;
    remainingTasksCount.innerText = tasksCount;
  }
});
// tasks.map((task) => {
//   if (!task.completed) {
//     tasksCount += 1;
//   }
// });

addTodo?.addEventListener("click", (e) => {
  e.preventDefault();

  if (newTodoInput.value == "" || newTodoInput.value == null) return;

  const newTask: TaskObject = {
    title: newTodoInput.value,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();

  addNewTask(newTask);
  newTodoInput.value = "";
});

function addNewTask(newTask: TaskObject) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("todo-list-item");
  const label = document.createElement("label");
  label.innerText = newTask.title;
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");
  if (remainingTasksCount == null) return;
  remainingTasksCount.innerText = tasksCount;

  checkbox.addEventListener("change", () => {
    newTask.completed = checkbox.checked;
    if (!newTask.completed) {
      tasksCount += 1;
      remainingTasksCount.innerText = tasksCount;
    }
    if (newTask.completed) {
      tasksCount -= 1;
      remainingTasksCount.innerText = tasksCount;
    }
    saveTasks();
  });
  checkbox.checked = newTask.completed;
  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  todoListItems.appendChild(taskItem);
}

// save to local storage

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const taskJSON = localStorage.getItem("tasks");
  if (taskJSON == null) return [];
  return JSON.parse(taskJSON);
}

// delete list
