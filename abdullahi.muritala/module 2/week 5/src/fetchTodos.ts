interface ApiTodo {
  title: string;
  completed: boolean;
}

const fetchTodos = async (userId: number): Promise<ApiTodo[]> => {
  const targetUrl = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
  try {
    const response = await fetch(targetUrl);
    const todos = await response.json();
    return todos;
  } catch (error) {
    throw error;
  }
};

export default fetchTodos;
