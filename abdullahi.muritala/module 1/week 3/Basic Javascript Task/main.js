const getDataBtn = document.querySelector('#getUsersData');
const usersList = document.querySelector('#usersList');
const targetUrl = 'https://jsonplaceholder.typicode.com/users';

const fetchUserData = async () => {
  try {
    const response = await fetch(targetUrl);
    const users = await response.json();
    return users;
  } catch (error) {
    throw error;
  }
};

const renderUsersData = async () => {
  clearContent(usersList);
  const fragment = document.createDocumentFragment();
  const usersData = await fetchUserData();
  usersData.forEach((user) => {
    const currentUser = document.createElement('li');
    const id = document.createElement('p');
    const fullname = document.createElement('p');
    const username = document.createElement('p');
    const email = document.createElement('p');
    const website = document.createElement('p');
    const phoneNumber = document.createElement('p');

    // Add text content to node elements
    id.textContent = `User ID: ${user.id}`;
    fullname.textContent = `Name: ${user.name}`;
    username.textContent = `Username: ${user.username}`;
    email.textContent = `Email: ${user.email}`;
    website.textContent = `Website: ${user.website}`;
    phoneNumber.textContent = `Phone Number: ${user.phone}`;

    currentUser.append(id, fullname, username, email, website, phoneNumber);

    fragment.appendChild(currentUser);
  });
  usersList.appendChild(fragment);
};

// Helper funciton to clear the DOM before calling for new data.
function clearContent(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

getDataBtn.addEventListener('click', renderUsersData);
