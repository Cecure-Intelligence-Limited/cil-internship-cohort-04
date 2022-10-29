const todo = {
  userId: 1,
  id: 751,
  title: 'A new todo added to endpoint',
  completed: true,
};
const url = 'https://jsonplaceholder.typicode.com/todos';

// POST request to the endpoint

const postTodo = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });
    const resolvedResponse = await response.json();
    console.log(resolvedResponse);
  } catch (error) {
    throw error;
  }
};

postTodo(url, todo);

// GET request to either get sepcified todos or the whole 200

const fetchTodos = async (url, userId) => {
  // Fetch all the todos if user does not specify any userId to fetch
  let targetUrl;
  if (userId) {
    targetUrl = `${url}?userId=${userId}`;
  } else {
    targetUrl = `${url}`;
  }

  try {
    const response = await fetch(targetUrl);
    const todos = await response.json();
    console.log(todos);
  } catch (error) {
    throw error;
  }
};

fetchTodos(url, 3);

// PUT request to the endpoint

const todoToModify = {
  userId: 1,
  id: 5,
  title: 'Update the todo with this id',
  completed: false,
};

const putTodo = async (url, data) => {
  const targetUrl = `${url}/${data.id}`;
  try {
    const response = await fetch(targetUrl, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });
    const resolvedResponse = await response.json();
    console.log(resolvedResponse);
  } catch (error) {
    throw error;
  }
};

putTodo(url, todoToModify);

// PATCH reques to the todo with id of 5

const patchTodo = async (url, data) => {
  const targetUrl = `${url}/${data.id}`;
  try {
    const response = await fetch(targetUrl, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        completed: true,
      }),
    });
    const resolvedResponse = await response.json();
    console.log(resolvedResponse);
  } catch (error) {
    throw error;
  }
};

patchTodo(url, todoToModify);

// DELETE reqeust to the task with id of 5

const deleteTodo = async (url, data) => {
  const targetUrl = `${url}/${data.id}`;
  try {
    const response = await fetch(targetUrl, {
      method: 'DELETE',
    });
    const resolvedResponse = await response.json();
    console.log(resolvedResponse);
  } catch (error) {
    throw error;
  }
};

deleteTodo(url, todoToModify);
