const data = document.querySelector(".users");

async function renderUser() {
  let listData = await fetch("https://jsonplaceholder.typicode.com/users");
  let list = await listData.json();
  console.log(list);
  list.forEach((details) => {
    let content = `<ul>
    <div class="lists">
        <li><span>Name: </span> ${details.name}</li>
        <li><span>Username: </span> ${details.username}</li>
        <li><span>Email: </span> ${details.email}</li>
        <li><span>Phone: </span> ${details.phone}</li>
        <li><span>Website: </span> ${details.website}</li>
    </div>
 
    </ul>`;
    data.insertAdjacentHTML("beforeend", content);
  });
}
renderUser();
