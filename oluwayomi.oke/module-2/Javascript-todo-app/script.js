const taskInput = document.querySelector(".task-input input");
const form = document.querySelector(".task-input");
const submitBtn = document.querySelector(".task-input button");
const filters = document.querySelectorAll(".filters span");
const clearBtn = document.querySelector(".clear-btn");
const taskBox = document.querySelector(".task-box");

let editId;
let isEditedTask = false;

// getting local storage for todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));

// add filters
filters.forEach((btn) => {
	btn.addEventListener("click", () => {
		document.querySelector("span.active").classList.remove("active");
		btn.classList.add("active");
		showTodo(btn.id);
	});
});

// Display all Todo items
const showTodo = (sort) => {
	let li = "";
	if (todos) {
		todos.forEach((todo, id) => {
			let isCompleted = todo.status == "completed" ? "checked" : "";
			if (sort == todo.status || sort == "all") {
				li += `<li class="task">
								<label for="${id}">
									<input onclick="updateStatus(this)" type="checkbox" name="${id}" id="${id}" ${isCompleted} />
									<p class="${isCompleted}">${todo.name}</p>
								</label>

								<div class="settings">
									<i onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
									<ul class="task-menu">
										<li onclick="editTask(${id}, '${todo.name}')">
											<i class="fa-solid fa-pen-to-square"></i>
											Edit
										</li>
										<li onclick="deleteTask(${id})">
											<i class="fa-solid fa-pen-to-square"></i>
											Remove
										</li>
									</ul>
								</div>
							</li>`;
			}
		});
	}
	taskBox.innerHTML = li || `<span>You don't have any task here yet</span>`;
};
showTodo("all");

const showMenu = (selectedTask) => {
	// getting <ul class="task-menu">
	let taskMenu = selectedTask.parentElement.lastElementChild;
	taskMenu.classList.add("show");
	document.addEventListener("click", (e) => {
		if (e.target.tagName != "I" || e.target != selectedTask) {
			taskMenu.classList.remove("show");
		}
	});
};

const updateStatus = (selectedTask) => {
	// getting paragraph <p>${todo.name}</p>
	let taskName = selectedTask.parentElement.lastElementChild;
	if (selectedTask.checked) {
		taskName.classList.add("checked");

		todos[selectedTask.id].status = "completed";
		console.log(selectedTask);
	} else {
		taskName.classList.remove("checked");
		todos[selectedTask.id].status = "pending";
	}

	if ((todos[selectedTask.id].status = "pending")) {
		if (selectedTask.checked) {
			taskName.classList.add("checked");

			todos[selectedTask.id].status = "completed";
			console.log(selectedTask);
		} else {
			taskName.classList.remove("checked");
			todos[selectedTask.id].status = "pending";
		}
	}
	localStorage.setItem("todo-list", JSON.stringify(todos));
};

const editTask = (id, name) => {
	editId = id;
	isEditedTask = true;
	taskInput.value = name;
};

const deleteTask = (id) => {
	// remove selected task from array
	todos.splice(id, 1);
	localStorage.setItem("todo-list", JSON.stringify(todos));
	showTodo("all");
};

clearBtn.addEventListener("click", () => {
	// remove all tasks from array
	todos.splice(0, todos.length);
	localStorage.setItem("todo-list", JSON.stringify(todos));
	showTodo("all");
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let userTask = taskInput.value.trim();

	// if (e.key == "Enter" && userTask) {
	if (userTask) {
		if (!isEditedTask) {
			if (!todos) {
				todos = [];
			}
			let taskInfo = { name: userTask, status: "pending" };
			todos.push(taskInfo);
		} else {
			isEditedTask = false;
			todos[editId].name = userTask;
		}

		taskInput.value = "";
		localStorage.setItem("todo-list", JSON.stringify(todos));
		showTodo("all");
	}
});

