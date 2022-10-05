'use strict';
const url = 'https://jsonplaceholder.typicode.com/users';

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  // for(const user of data){
  //   document.querySelector('.id').textContent = `${user.id}`;
  // }
  for(let i = 0; i < data.length; i++){
    const html = `<ul>
       <li>ID: ${data[i].id}</li>
       <li>NAME: ${data[i].name}</li>
       <li>USERNAME: ${data[i].username}</li>
       <li>ADDRESS: ${data[i].address.suite}, ${data[i].address.street}, ${data[i].address.city}</li>
       <li>EMAIL: ${data[i].email}</li>
       <li>PHONE NO: ${data[i].phone}</li>
       <li>COMPANY: ${data[i].company.name},...${data[i].company.catchPhrase}</li>
       <li>WEBSITE: ${data[i].website}</li>
     </ul>
     <hr>`;
     document.querySelector('#container').insertAdjacentHTML('beforeend', html);
  }
}
getData();
