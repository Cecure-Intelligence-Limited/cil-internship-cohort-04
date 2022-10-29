const form = document.querySelector(".input-field") as HTMLFormElement;
const todoList = document.querySelector<HTMLDivElement>("#list");
const inputEl = document.querySelector<HTMLInputElement>("#input");

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(inputEl?.value);
  const task = inputEl?.value;
  if (!task) return alert("task cannot be Empty");

  //add dom Element
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskContent = document.createElement("div");
  taskContent.classList.add("content");

  taskDiv.appendChild(taskContent);

  const inputf = document.createElement("input");
  inputf.classList.add("text");
  inputf.type = "text";
  inputf.value = task;
  inputf.setAttribute("readonly", "readonly");

  taskContent.appendChild(inputf);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("actions");

  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.innerText = "edit";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerText = "delete";

  buttonDiv.appendChild(editButton);
  buttonDiv.appendChild(deleteButton);

  taskDiv.appendChild(buttonDiv);
  todoList?.appendChild(taskDiv);

  inputEl.value = "";

  //edit task
  editButton.addEventListener("click", (e) => {
    if (editButton.innerText.toLowerCase() == "edit") {
      editButton.innerText = "Save";
      inputf.removeAttribute("readonly");
      inputf.focus();
    } else {
      editButton.innerText = "Edit";
      inputf.setAttribute("readonly", "readonly");
    }
  });
  //delete Task
  deleteButton.addEventListener("click", (e) => {
    todoList?.removeChild(taskDiv);
  });
});
