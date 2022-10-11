const baseUrl = 'https://jsonplaceholder.typicode.com';
const loading = document.querySelector('.loader');

const getUserId = () => {
  const currentURL = window.location.search;
  console.log(currentURL);
  const params = new URLSearchParams(currentURL);
  console.log(params);
  return params.get('id') || 1;
};

// Get a User TodoList
async function getUserTodo() {
  const id = getUserId();
  let url = `${baseUrl}/users/${id}/todos`;
  try {
    let res = await fetch(url);
    console.log();
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

//Render User Todo List to the DOM
async function renderTodo() {
  loading.style.display = 'block';
  let todos = await getUserTodo();
  let html = '';
  todos.forEach((todo) => {
    let htmlSegment = `<div class="todo">
                            <h3>${todo.title}</h3>
                            <p type="${todo.completed}"></p>
                        </div>`;
    html += htmlSegment;
  });

  var containerTodo = document.getElementById('London');

  containerTodo.innerHTML = html;
  loading.style.display = 'none';
}

renderTodo();

//Go back function
document.getElementById('back').addEventListener('click', () => {
  window.history.back();
});
