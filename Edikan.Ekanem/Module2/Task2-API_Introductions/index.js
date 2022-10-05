document.getElementById("getTodo").addEventListener("click", getTodo);
document.getElementById("addTodo").addEventListener("submit", addTodo);

//GET request
function getTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = `<h2>To-do's</h2>`;
      data.forEach((user) => {
        output += `
        <div class="list">
            <h2 class="list-item">ID: ${user.id}</h2>
            <p class="">Title: ${user.title}</p>
            <p class="">Completed: ${user.completed}</p>
        </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => alert(err));
}

//PUT request
function addTodo(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let completed = false;

  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, completed: completed }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = `
        <div class="list">
            <h2 class="list-item">ID: ${data.id}</h2>
            <p class="">Title: ${data.title}</p>
            <p class="">Completed: ${data.completed}</p>
        </div>
        `;
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => alert(err));
}
