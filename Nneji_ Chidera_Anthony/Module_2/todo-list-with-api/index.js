const form = document.querySelector(".input-field");

const getTodos = document.querySelector(".gettodo");
const newTodo = document.querySelector(".addnew");
const todos = document.querySelector("#list");
const modd = document.querySelector("#mod");

let ourTodoList = [];

const html = (data, y) => {
  let domData = `<div class="task" id=${y}>
<div class="content">
    <input id="uid" type="text" value="${data.userId}" class="text" readonly>
    <input id="id" type="text" value="${data.id}" class="text " readonly>
    <input id="tit" type="text" value="${data.title}" class="text" readonly>
    <input id="com" type="text" value="${data.completed}" class="text" readonly>
</div>
<div class="actions">
    <button onclick="editPut(this, ${data.id})" class="edit">Edit</button>
    <button onclick="deleteTodo(this, ${data.id})" class="delete">delete</button>
</div>
</div>`;
  // todos.innerHTML = "";
  todos.insertAdjacentHTML("beforeend", domData);
};

//Get Request
const fetchAndRenderTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      ourTodoList = data;

      ourTodoList.map((d, y) => {
        html(d, y);
      });
    });
};

//Post Request
const addNewTodo = (e) => {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let userId = document.querySelector("#userid").value;
  if (title && userId) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        completed: false,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        ourTodoList.push(data);
        ourTodoList.forEach((d) => {
          html(d);
        });
      });
  }

  form.classList.toggle("input-field-d");
};

// Delete
const deleteTodo = (td) => {
  td.parentElement.parentElement.remove();
  ourTodoList.splice(td.parentElement.parentElement.id, 1);
};

// Put Request
let clicked = false;
const editPut = (el, id) => {
  let taskId = ourTodoList[id - 1];

  if (el.innerText.toLowerCase() == "edit" && clicked === false) {
    el.innerText = "Save";

    let modda = `<div class="modal-bg">
    <div class="modal">
        <i class="fa-solid fa-xmark" id="close-btn"></i>
        <h2>Edit Todo</h2>
        <input type="text" class=" userid-m"  placeholder="todo" >
        <input type="text" class=" id-m" placeholder="todo" >
        <input type="text" class="title-m" placeholder="todo">
        <input type="text" class="completed-m"  placeholder="status">
        <button type="submit" class="m-submit">Save</button>
    </div>
</div>`;
    modd.insertAdjacentHTML("beforeend", modda);
    const modall = document.querySelector(".modal-bg");
    const modallc = document.querySelector("#close-btn");
    const submitEdit = document.querySelector(".m-submit");
    modall.classList.add("bg-active");
    modallc.addEventListener("click", () => {
      modall.classList.remove("bg-active");

      el.innerText = "edit";
      clicked = false;
    });
    clicked = true;
    submitEdit.addEventListener("click", () => {
      let updatedUserId = document.querySelector(".userid-m").value;
      let updatedId = document.querySelector(".id-m").value;
      let updatedtitle = document.querySelector(".title-m").value;
      let updatedCompleted = document.querySelector(".completed-m").value;
      taskId.title = updatedtitle;

      //Put Request
      fetch(`https://jsonplaceholder.typicode.com/posts/${taskId.id}`, {
        method: "PUT",
        body: JSON.stringify({
          userId: updatedUserId,
          id: updatedId,
          title: updatedtitle,
          completed: updatedCompleted,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      alert("put request successfull");
      modall.classList.remove("bg-active");
      el.innerText = "edit";
      clicked = false;
    });
  } else {
    el.innerText = "edit";
    clicked = false;
  }
};

//event Listeners
newTodo.addEventListener("click", () => {
  form.classList.toggle("input-field-d");
  document.querySelector("#title").value = "";
  document.querySelector("#userid").value = "";
  form.addEventListener("submit", addNewTodo);
});

getTodos.addEventListener("click", fetchAndRenderTodos);
