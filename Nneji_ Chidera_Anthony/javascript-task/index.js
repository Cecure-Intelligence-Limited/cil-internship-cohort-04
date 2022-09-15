const usersdet = document.querySelector(".users");

const render = (data) => {
  const html = `
  <div class="user-detail">
  
  <p class="user__id"><span class="set">id:</span> ${data.id}</p>
  <p class="user__name"><span class="set">Name:</span> ${data.name}</p>
  <p class="user__uname"><span class="set">username:</span> ${data.username}</p>
  <p class="user__email"><span class="set">email:</span> ${data.email}</p>
  <p class="user__website"><span class="set">website:</span> ${data.website}</p>
  <p class="user__phone"><span class="set">Phone:</span> ${data.phone}</p>
  
  
  </div>
  `;
  usersdet.insertAdjacentHTML("beforeend", html);
};
const loadData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const resdata = await res.json();
  resdata.map((data) => render(data));
};
loadData();
