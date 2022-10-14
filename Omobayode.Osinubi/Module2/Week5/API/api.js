//Getting the html Elements
const buttonEl = document.querySelector('.get');
const buttonElement = document.querySelector('.submit');
const buttonElementPut = document.querySelector('.put');
const buttonElementDelete = document.querySelector('.delete');


// A GET REQUEST
var getHandler = async () =>{
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    if(!res.ok){
      console.log(data.description)
      return;
    }
    console.log(data)
  }catch(error){
    console.log(error);
  }
}
buttonEl.addEventListener('click', getHandler);

// A POST REQUEST
const newTodo = {
  userId: 11,
  title: 'Add New Todo',
  completed: false
};
const submitHandler = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo)
  });
  const data = await res.json();
  if(!res.ok){
    console.log(data.description)
    return;
  }
  console.log(data);
}
buttonElement.addEventListener('click', submitHandler);

// A PUT REQUEST - Update or replace a particular resource
const repTodo = {
  userId: 12,
  title: 'Replace Todo',
  completed: false
};
const putHandler = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/10', {
    method: 'PUT',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(repTodo)
  });
  const data = await res.json();
  if(!res.ok){
    console.log(data.description)
    return;
  }
  console.log(data);
}
buttonElementPut.addEventListener('click', putHandler);

// A DELETE REQUEST
const deleteHandler = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/11', {
    method: 'DELETE'
  });
  const data = await res.json();
  if(!res.ok){
    console.log(data.description)
    return;
  }
  console.log(data);
}
buttonElementDelete.addEventListener('click', deleteHandler);

