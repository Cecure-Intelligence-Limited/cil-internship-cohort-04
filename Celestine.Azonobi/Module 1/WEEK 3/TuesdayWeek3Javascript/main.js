const list = document.getElementById("myList");
const eachList = document.createDocumentFragment();
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    data.forEach((item) => {
      let list = document.createElement("li");
      let name = document.createElement("h2");
      let username = document.createElement("p");

      name.innerText = `Name: ${item.name}`;
      username.innerText = `Username: ${item.username}`;

      list.appendChild(name);
      list.appendChild(username);

      eachList.appendChild(list);
    });
    console.log(data);
    list.appendChild(eachList);
  })
  .catch((err) => {
    console.log(`Error fetching: ${err}`);
  });