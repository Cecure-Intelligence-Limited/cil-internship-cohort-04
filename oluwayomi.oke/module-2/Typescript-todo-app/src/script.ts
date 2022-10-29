import { v4 as uuidV4 } from "uuid";

type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

// Save task items to the list
const saveTasks = () => {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}

// get tasks from local storage and display to screen
const loadTasks = (): Task[] => {
  const taskJSON = localStorage.getItem("TASKS");
  if (taskJSON == null) return [];
  return JSON.parse(taskJSON);
}


// remove selected task from array
const deleteTask = (id: number) => {
	tasks.splice(id, 1);
	localStorage.setItem("TASKS", JSON.stringify(tasks));
	loadTasks()
};

const tasks: Task[] = loadTasks();

// Add new Item to list
const addListItem = (task: Task) => {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = 'X';
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;

    if (task.completed) {
      item.classList.add("checked");
    }
    else {
      item.classList.remove("checked");
    }

    saveTasks();
  });

  deleteBtn.addEventListener("click", () => {
    deleteTask(Number(task.id));
    window.location.reload();
  })
  
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  label.append(checkbox, task.title, deleteBtn);
  item.append(label);
  list?.append(item);
}

tasks.forEach(addListItem);

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) return;

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  }
  tasks.push(newTask);
  saveTasks();

  addListItem(newTask);
  input.value = "";
})