const postTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
             userId: 1,
             id: 751,
             title: 'A new todo',
             completed: true,
           }),
    });
    const resolvedResponse = await response.json();
    console.log(resolvedResponse);
};

postTodo();

const getTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
    });
    const resolvedResponse = await response.json();
    console.log(resolvedResponse);
};

getTodo();

const putTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/4', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
             userId: 1,
             id: 4,
             title: 'Modify todo',
             completed: true,
           }),
    });
    const resolvedResponse = await response.json();
    console.log(resolvedResponse);
};

putTodo();