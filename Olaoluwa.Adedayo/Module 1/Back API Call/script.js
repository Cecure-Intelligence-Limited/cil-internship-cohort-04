const url = `https://jsonplaceholder.typicode.com/users`
const users = document.querySelector('.use-container')
const li = document.createElement('li')
li.classList.add('list')

const fetchUsers = () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const markup = `
      <p class="name">${data[0].name}</p>
      <p class="user">${data[0].username}</p> 
      <p class="email">${data[0].email}</p>
    `

      li.innerHTML = markup;
      users.appendChild(li)
    })
    .then(error => console.log(error))
}

fetchUsers()







