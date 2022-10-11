const display = document.querySelector(".display");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const updateBtn = document.querySelector(
	".update-todos"
);

let li = "";

const url =
	"https://jsonplaceholder.typicode.com/todos";

// GET

const getAllTodos = async () => {
	try {
		const res = await fetch(url);
		const data = await res.json();

		let todos = data.splice(190);
		console.log(todos);

		todos.forEach((todo) => {
			let isCompleted =
				todo.completed == "true" ? "checked" : "";

			li += `<li>
              <input type="checkbox" name="${todo.id}" id="${todo.id}" ${isCompleted} />

              ${todo.title}
            </li>`;
		});
	} catch (err) {
		console.log(err);
	}

	display.innerHTML = li;
};
getAllTodos();

// POST
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let data = input.value;

	postTodo(data);
	input.value = "";
});

const postTodo = async (data) => {
	try {
		if (data === undefined || !data) {
			alert("You need to input a todo task");
			return;
		}

		const res = await fetch(url, {
			method: "POST",
			body: JSON.stringify({
				userId: 1,
				title: data,
				completed: false,
			}),
			headers: {
				"Content-type":
					"application/json; charset=UTF-8",
			},
		});

		const newtodo = await res.json();

		li += `<li>
            <input type="checkbox" name="${newtodo.id}" id="${newtodo.id}" />

            ${newtodo.title}
          </li>`;
	} catch (err) {
		console.log(err);
	}

	display.innerHTML = li;
};

// PUT
updateBtn.addEventListener("click", () => {
	getPreviousTodo();
	updateTodo();
});

const updateTodo = async () => {
	const newUpdate =
		document.querySelector(".new-update");

	try {
		const res = await fetch(`${url}/200`, {
			method: "PUT",
			body: JSON.stringify({
				userId: 1,
				title: "Hello",
				completed: true,
			}),
			headers: {
				"Content-type":
					"application/json; charset=UTF-8",
			},
		});

		const updatedtodo = await res.json();

		li = `<li>
            <span> Updated Data: </span>
            <br />
            Id: ${updatedtodo.id}
            <br />
            Title: ${updatedtodo.title}
            <br />
            Userid: ${updatedtodo.userId}
            <br />
            Completed: ${updatedtodo.completed}
          </li>`;
	} catch (err) {
		console.log(err);
	}

	newUpdate.innerHTML = li;
};

const getPreviousTodo = async () => {
	const previous =
		document.querySelector(".previous");

	try {
		const res = await fetch(`${url}/200`);
		const todo = await res.json();

		li = `<li>
            <span> Previous Data: </span>
            <br />
            Id: ${todo.id}
            <br />
            Title: ${todo.title}
            <br />
            Userid: ${todo.userId}
            <br />
            Completed: ${todo.completed}

            <hr />
          </li>`;
	} catch (err) {
		console.log(err);
	}

	previous.innerHTML = li;
};
