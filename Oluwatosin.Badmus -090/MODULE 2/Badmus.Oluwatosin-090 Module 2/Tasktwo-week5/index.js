document.getElementById('getTasks').addEventListener('click', getTasks);
document.getElementById('addTask').addEventListener('submit', addTask);

function getTasks () {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2>The To-Do List</h2>';
    data.forEach(function(user){
      output += `
                       <div class="user">
                       <ul>
                       <li>ID: ${user.id}</li>
                       <li>Title: ${user.title}</li>
                       <li>Status: ${user.completed}</li>
                      </ul>   
                       </div>        
      `;
    });
    document.getElementById("output").innerHTML = output;
  })
}

function addTask(e){
  e.preventDefault();

  let title = document.getElementById('title').value;
  let completed = false;

  fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({title:title, completed:completed})
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}