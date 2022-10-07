const form = document.querySelector('.todo_form');
const inputValue = document.querySelector('.todo_input');
const container = document.querySelector('.todo_container');
const todoItems = document.querySelector('.todo_items');
let currentActive = document.querySelector('.active');
const date = document.querySelector('.date');
const loading = document.querySelector('.loader');

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

const baseUrl = 'https://jsonplaceholder.typicode.com';

// GET ALL USERS
async function getUsers() {
  let url = `${baseUrl}/users`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderUsers() {
  loading.style.display = 'block';
  let users = await getUsers();
  console.log(users);
  let html = '';
  users.forEach((user) => {
    let htmlSegment = `<div class="user">
                            <h3>${user.name}</h3>
                            <a class="link" href="email:${user.email}">${user.email}</a>
                            <button data-id=${user.id} type="button" onclick="getTodoDetails(event, ${user.id})" >Todo List</button>
                        </div>`;
    html += htmlSegment;
  });

  let container = document.querySelector('.usersContainer');
  container.innerHTML = html;
  loading.style.display = 'none';
}
renderUsers();

const getTodoDetails = async (event, id) => {
  window.location.href = `/toluwalase.adeosun/Module2/Task2_module2/todoDetails.html?id=${id}`;
  console.log(id);
};

function dark_mode() {
  document.querySelector('.wrapper').style.backgroundColor = 'black';
}
function light_mode() {
  document.querySelector('.wrapper').style.backgroundColor = '';
}
