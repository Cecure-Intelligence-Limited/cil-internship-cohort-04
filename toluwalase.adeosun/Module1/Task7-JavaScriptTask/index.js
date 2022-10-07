const loader = document.querySelector('.loader');
async function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  loader.style.display = 'block';
  let users = await getUsers();
  console.log(users);
  let html = '';
  users.forEach((user) => {
    let htmlSegment = `<div class="user">
                        <ul>
                            <li>${user.name}</li>
                            <li>${user.address.city}</li>
                            <li>${user.website}</li>
                            <li>${user.username}</li>
                            <li>${user.number}</li>
                            <li>${user.id}</li>
                        </ul>
                    </div>`;

    html += htmlSegment;
  });
  let usersContainer = document.querySelector('.usersContainer');
  usersContainer.innerHTML = html;
  loader.style.display = 'none';
}

renderUsers();
