// api
const url = "https://jsonplaceholder.typicode.com/todos";

// Selectors
const listsContainer = document.getElementById("all-lists-items");
const newListInput = document.getElementById("form-input-new-list");
const addList = document.getElementById("add-list");
const addTodo = document.getElementById("add-todo");
let todoListTitle = document.getElementById("todo-list-title");
const newListForm = document.getElementById("new-todo-form");
const newTodoForm = document.getElementById("new-todo-form");
const newTodoInput = document.getElementById("form-input-new-todo");
const listClear = document.querySelector(".clear");
const clearComplete = document.querySelector(".clear-complete");
const deleteList = document.querySelector(".delete-list");
const todoListItems = document.querySelector(".todo-list-items");
const remainingTasksCount = document.getElementById("items-count");

// array to store user IDs
let listIds = [];
let todoIds = [0];

// FUNCTIONS
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

// FETCH TODO LISTS WITH A GET REQUEST TO THE API ENDPOINT
const fetchTodos = async function () {
  try {
    const todos = await fetch(url).then((res) => res.json());
    listsContainer.innerHTML = "";
    todos.map((todo) => {
      //   tempSet = new Set(lists.push(todo.userId));
      listIds.push(todo.userId);
    });
    listIds = [...new Set(listIds)];
    // render The 10 userIDs on the page as list of todoLists
    listIds.map((listId) => {
      const listItem = document.createElement("li");
      listItem.innerText = `User ${listId}`;
      listItem.classList.add("inactive-list");

      listsContainer.appendChild(listItem);
    });
    const listTags = listsContainer.querySelectorAll("li");

    // show initial blank page
    todoListTitle.innerText = "No User Selected";
    newTodoForm.style.display = "none";
    listClear.style.display = "none";
    document.querySelector(".todo-list-info").style.display = "none";

    listTags.forEach((listItem) => {
      listItem.addEventListener("click", () => {
        // display form and clear buttons
        newTodoForm.style.display = "flex";
        listClear.style.display = "flex";
        document.querySelector(".todo-list-info").style.display = "flex";

        // iterate through and display todo list tasks
        listTags.forEach((listItem) => {
          listItem.classList.remove("active-list");
        });
        listItem.classList.toggle("active-list");
        todoListTitle.innerText = listItem.innerText;
        todoListId = todoListTitle.innerText.match(/(\d+)/)[0];

        // render tasks list on page
        listTags.forEach((listTag) => {
          async function asyncCall() {
            // console.log('calling');

            await (todoListItems.innerHTML = "");

            //initialized count for remaining tasks
            let uncheckedCount = 0;

            // render only selected list
            if (listTag.classList.contains("active-list")) {
              todos.map((todo) => {
                // console.log(listTag);

                if (listTag.innerText === `User ${todo.userId}`) {
                  let taskTitles = [];
                  taskTitles.push(todo.title);
                  // console.log(taskTitles);
                  const taskDiv = document.createElement("div");
                  taskDiv.classList.add("todo-list-item");
                  todoListItems.appendChild(taskDiv);
                  const taskCheckbox = document.createElement("input");
                  taskCheckbox.setAttribute("type", "checkbox");
                  taskCheckbox.classList.add("checkbox");
                  taskDiv.appendChild(taskCheckbox);
                  const taskTitle = document.createElement("label");
                  taskTitle.innerText = todo.title;
                  taskDiv.appendChild(taskTitle);
                  // checkmark completed todos
                  todo.completed
                    ? (taskCheckbox.checked = true)
                    : (taskCheckbox.checked = false);

                  // count remaining tasks
                  //
                  if (!taskCheckbox.checked) {
                    uncheckedCount += 1;
                    // listen to unchecked boxes
                    taskCheckbox.addEventListener(
                      "click",
                      async function editCompletionStatus(event) {
                        event.preventDefault;
                        console.log(todo.completed);
                        // START OF PUT REQUEST TO TOGGLE COMPLETED STATUS BETWEEN TRUE and FALSE
                        await fetch(
                          `https://jsonplaceholder.typicode.com/todos/${todo.userId}`,
                          {
                            method: "PUT",
                            body: JSON.stringify({
                              completed: true,
                              title: todo.title,
                              userId: todo.userId,
                            }),
                            headers: {
                              "Content-Type": "application/json; charset=UTF-8",
                            },
                          }
                        )
                          .then((res) => res.json())
                          .then((data) => console.log(data))
                          .catch((error) => alert(error.message));
                        // END OF PUT REQUEST TO TOGGLE COMPLETED STATUS BETWEEN TRUE and FALSE
                        if (taskCheckbox.checked) {
                          uncheckedCount -= 1;
                          //   console.log(uncheckedCount);
                          //   uncheckedCount = 0;
                          remainingTasksCount.innerText = uncheckedCount;
                          return uncheckedCount;
                        }

                        if (!taskCheckbox.checked) {
                          uncheckedCount += 1;
                          //   console.log(uncheckedCount);
                          //   uncheckedCount = 0;
                          remainingTasksCount.innerText = uncheckedCount;
                          return uncheckedCount;
                        }
                        // console.log(taskCheckbox);
                      }
                    );
                  }
                  if (taskCheckbox.checked) {
                    // listen to checked boxes
                    taskCheckbox.addEventListener(
                      "click",
                      async function editCompletionStatus(event) {
                        event.preventDefault;
                        console.log(todo.completed);
                        // START OF PUT REQUEST TO TOGGLE COMPLETED STATUS BETWEEN TRUE and FALSE
                        await fetch(
                          `https://jsonplaceholder.typicode.com/todos/${todo.userId}`,
                          {
                            method: "PUT",
                            body: JSON.stringify({
                              completed: false,
                              title: todo.title,
                              userId: todo.userId,
                            }),
                            headers: {
                              "Content-Type": "application/json; charset=UTF-8",
                            },
                          }
                        )
                          .then((res) => res.json())
                          .then((data) => console.log(data))
                          .catch((error) => alert(error.message));
                        // END OF PUT REQUEST TO TOGGLE COMPLETED STATUS BETWEEN TRUE and FALSE
                        if (taskCheckbox.checked) {
                          uncheckedCount -= 1;
                          //   console.log(uncheckedCount);
                          //   uncheckedCount = 0;
                          remainingTasksCount.innerText = uncheckedCount;
                          return uncheckedCount;
                        }

                        if (!taskCheckbox.checked) {
                          uncheckedCount += 1;
                          //   console.log(uncheckedCount);
                          //   uncheckedCount = 0;
                          remainingTasksCount.innerText = uncheckedCount;
                          return uncheckedCount;
                        }
                        // console.log(taskCheckbox);
                      }
                    );
                  }

                  //   uncheckedCount = 0;
                  //   remainingTasksCount.innerText = uncheckedCount;
                }
                remainingTasksCount.innerText = uncheckedCount;
              });
            }
          }
          asyncCall();
        });
      });
    });
  } catch (error) {
    alert(error.message);
  }
};

// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

// POST REQUEST TO ADD NEW LIST TO LIST OF LISTS
const addNewList = async function (event) {
  try {
    event.preventDefault();
    // check invalid inputs
    if (newListInput.value === "") {
      return;
    }
    if (isNaN(Number(newListInput.value))) {
      alert("Enter valid list number");
      newListInput.value = "";
      return;
    }
    if (listIds.includes(Number(newListInput.value))) {
      alert("User number already exists. Enter a different number");
      newListInput.value = "";
      return;
    }
    // post new list using fetch
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        completed: false,
        title: "",
        userId: Number(newListInput.value),
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    //   .catch((error) => alert(error.message));

    listIds.push(Number(newListInput.value));

    newListInput.value = "";
    todoListItems.innerHTML = "";

    //   fetchTodos again to include new list
    fetchTodos();
  } catch (error) {
    alert(error.message);
  }
};

// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

// store count of uncompleted tasks
let uncheckedCount = 0;

// POST REQUEST TO ADD NEW TASK TO TODOLIST
const addNewTask = async function (event) {
  const listId = document
    .querySelector(".active-list")
    .innerText.match(/(\d+)/)[0];
  const listName = document.querySelector(".active-list").innerHTML;
  const todoName = todoListTitle.innerHTML;

  // add new task
  if (listName === todoName) {
    try {
      event.preventDefault();
      // post new list using fetch
      const todo = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          completed: false,
          title: newTodoInput.value,
          userId: Number(listId),
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());

      console.log(todo);

      // check invalid inputs
      if (newTodoInput.value === "") {
        return;
      }

      todoIds.push(Number(newTodoInput.value));

      newTodoInput.value = "";

      // paint DOM with new tasks
      let taskTitles = [];
      taskTitles.push(todo.title);
      // console.log(taskTitles);
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("todo-list-item");
      todoListItems.appendChild(taskDiv);
      const taskCheckbox = document.createElement("input");
      taskCheckbox.setAttribute("type", "checkbox");
      taskCheckbox.classList.add("checkbox");
      taskDiv.appendChild(taskCheckbox);
      const taskTitle = document.createElement("label");
      taskTitle.innerText = todo.title;
      taskDiv.appendChild(taskTitle);

      // checkmark completed todos
      todo.completed
        ? (taskCheckbox.checked = true)
        : (taskCheckbox.checked = false);

      // count remaining tasks
      if (!taskCheckbox.checked) {
        uncheckedCount += 1;
        taskCheckbox.addEventListener(
          "click",
          async function editCompletionStatus(event) {
            event.preventDefault;
            console.log(todo.completed);
            // START OF PUT REQUEST TO TOGGLE COMPLETED STATUS BETWEEN TRUE and FALSE
            await fetch(
              `https://jsonplaceholder.typicode.com/todos/${todo.userId}`,
              {
                method: "PUT",
                body: JSON.stringify({
                  completed: true,
                  title: todo.title,
                  userId: todo.userId,
                }),
                headers: {
                  "Content-Type": "application/json; charset=UTF-8",
                },
              }
            )
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch((error) => alert(error.message));

            // check for unchekced boxes
            if (taskCheckbox.checked) {
              uncheckedCount -= 1;
              remainingTasksCount.innerText = uncheckedCount;
            }

            if (!taskCheckbox.checked) {
              uncheckedCount += 1;
              remainingTasksCount.innerText = uncheckedCount;
            }
          }
        );
        // END OF PUT REQUEST TO TOGGLE COMPLETED STATUS BETWEEN TRUE and FALSE
      }
      if (taskCheckbox.checked) {
        uncheckedCount += 1;
        taskCheckbox.addEventListener(
          "click",
          async function editCompletionStatus(event) {
            event.preventDefault;
            console.log(todo.completed);
            // START OF PUT REQUEST TO TOGGLE COMPLETED STATUS BETWEEN TRUE and FALSE
            await fetch(
              `https://jsonplaceholder.typicode.com/todos/${todo.userId}`,
              {
                method: "PUT",
                body: JSON.stringify({
                  completed: false,
                  title: todo.title,
                  userId: todo.userId,
                }),
                headers: {
                  "Content-Type": "application/json; charset=UTF-8",
                },
              }
            )
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch((error) => alert(error.message));

            // check for checked boxes
            if (taskCheckbox.checked) {
              uncheckedCount -= 1;
              remainingTasksCount.innerText = uncheckedCount;
            }

            if (!taskCheckbox.checked) {
              uncheckedCount += 1;
              remainingTasksCount.innerText = uncheckedCount;
            }
          }
        );
        // END OF PUT REQUEST TO TOGGLE COMPLETED STATUS BETWEEN TRUE and FALSE
      }

      // update number of checked todos
      remainingTasksCount.innerText = uncheckedCount;
      listsContainer.lastChild.classList.add("active-list");
    } catch (error) {
      alert(error.message);
    }
  }
  //
};

// -----------------------------------------------------------------------------------------------------
// CLEAR LIST

// PUT REQUEST TO TOGGLE COMPLETED STATUS BETWEEN TRUE and FALSE // -----------------------------------------------------------------------------------------------------

// const editCompletionStatus = async function (event) {
//   try {
//     // put request to todo endpoint
//     await fetch(url, {
//       method: "PUT",
//       body: JSON.stringify({
//         completed: !completed,
//         title: title,
//         userId: userId,
//       }),
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//     //   .catch((error) => alert(error.message));
//   } catch (error) {
//     alert(error.message);
//   }
// };

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// EVENTS HANDLERS

// todolists load event for GET request
window.addEventListener("load", fetchTodos);

// add new list event
addList.addEventListener("click", addNewList);

// add new task event
addTodo.addEventListener("click", addNewTask);

// toggle completed tasks event
