// const root = document.querySelector(".root__Users");
// const listHeading = document.createElement("h1");
// listHeading.innerHTML;
// let output = document.getElementById("table");

const url = "https://jsonplaceholder.typicode.com/users";

const fetchUsersData = async function () {
  try {
    const users = await fetch(url).then((res) => res.json());
    console.log(users);
    let output = `<tr bgcolor="grey">
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>ADDRESS</th>
                    <th>PHONE</th>
                    <th>COMPANY</th>
                    <th>WEBSITE</th>
                </tr>`;
    users.map((user) => {
      output += `
            <tr bgcolor="lightgrey" align="center">
            <td style={{"padding": '5px'}}>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.suite}, ${user.address.street} street, ${user.address.city}. zipcode: ${user.address.zipcode}</td>
            <td>${user.phone}</td>
            <td>${user.company.name}</td>
            <td>${user.website}</td>
            </tr>
            `;
    });
    document.getElementById("table").innerHTML = output;
  } catch (error) {
    alert(error.message);
  }
};
// fetchUsersData();
document.getElementById("getUsers").addEventListener("click", fetchUsersData);
// console.log(user);

// root.innerHTML = `<div>
// <h1>List of Users Data</h1><br />
// <h3>User${user}</h3>

// </div>`;
