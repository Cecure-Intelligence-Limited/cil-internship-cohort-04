const userInput = document.querySelector("#todo-task")
const addTodoBtn = document.querySelector(".add-todo")
const getTodoBtn = document.querySelector(".get-todo-btn")
const postTodoBtn = document.querySelector(".post-todo-btn")
const todoContainer = document.querySelector(".todo-div")
const todoLeftDIv = document.querySelector(".todo-items-left")
const todoLeft = document.querySelector(".curent-todo-left")
const todoURL = "https://jsonplaceholder.typicode.com/todos"
const defaultTodoText = todoLeft.textContent

let addTodoCounter = 0
let getTodoCounter = 20
let userRemoteID = 10

addTodoBtn.addEventListener("click", newTodoCreation)
getTodoBtn.addEventListener("click", remoteTodoGetter)
postTodoBtn.addEventListener("click", remoteTodoPoster)

function newTodoCreation() {
  const inputCheck = inputValidation()

  if (inputCheck) {
    addTodoDivCheck()

    todoLeftDIv.classList.add("active")

    const newTodo = divsCreation("not object")

    todoContainer.append(newTodo)

    addTodoCounter++

    todoUpdateCounter()

    userInput.value = ""
  } else {
    return
  }
}

async function remoteTodoGetter() {
  try {
    todoContainer.classList.remove("get")

    if (getTodoCounter < 20) {
      getTodoCounter = 20
    }

    if (todoContainer.children.length > 0) {
      todoContainer.textContent = ""
      todoLeftDIv.classList.remove("active")
    }

    const userID = Math.floor(Math.random() * 10) + 1
    const response = await fetch(todoURL)
    const datas = await response.json()

    datas.forEach((data) => {
      if (data.userId === userID) {
        divsCreation(data)
      } else return
    })
  } catch (error) {
    errorHandler(error)
  }
}

async function remoteTodoPoster() {
  if (todoContainer.children.length <= 0) {
    alert("Can't Post an empty todo list")
    return
  }

  try {
    userRemoteID++

    for (const child of todoContainer.children) {
      const userTodo = {
        userId: userRemoteID,
        title: child.innerText,
      }

      if (child.className === "todo active") {
        userTodo.completed = true
      } else {
        userTodo.completed = false
      }

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userTodo),
        }
      )
      const userDatas = await response.json()

      console.log(userDatas)
    }

    todoContainer.textContent = ""

    addTodoCounter = 0

    todoUpdateCounter()

    errorHandler(
      `Your Todos have been successfully uploaded, You can check the console to verify`
    )

    setTimeout(() => {
      todoLeftDIv.classList.remove("active")

      todoContainer.textContent = ""
    }, 5000)
  } catch (error) {
    errorHandler(error)
  }
}

function inputValidation() {
  if (userInput.value !== "") {
    return true
  } else {
    return false
  }
}

function divsCreation(userData) {
  if (typeof userData === "object") {
    const todo = document.createElement("div")
    const checkBtn = document.createElement("div")
    const text = document.createElement("p")

    todo.classList.add("todo")
    checkBtn.classList.add("check-btn")

    checkBtn.innerHTML = `
    <div class="check-btn-action">
      <img src="img/icon-check.svg" alt="" />
    </div>
  `
    text.textContent = userData.title

    if (userData.completed === true) {
      todo.classList.add("active")

      getTodoCounter--
    }

    todo.append(checkBtn)
    todo.append(text)

    todoContainer.append(todo)
    todoContainer.classList.add("get")

    userTasks(userData)
  } else {
    const todo = document.createElement("div")
    const checkBtn = document.createElement("div")
    const text = document.createElement("p")
    const deleteTodo = document.createElement("div")

    todo.classList.add("todo")
    checkBtn.classList.add("check-btn")
    deleteTodo.classList.add("delete-todo")

    checkBtn.innerHTML = `
    <div class="check-btn-action">
      <img src="img/icon-check.svg" alt="" />
    </div>
  `
    text.textContent = userInput.value
    deleteTodo.innerHTML = `<img src="img/icon-cross.svg" alt="" />`

    todo.append(checkBtn)
    todo.append(text)
    todo.append(deleteTodo)

    checkBtn.addEventListener("click", check)
    deleteTodo.addEventListener("click", deleteItem)

    return todo
  }
}

function userTasks(userData) {
  todoLeftDIv.classList.add("active")

  todoLeft.textContent = `UserId ${userData.userId} has ${getTodoCounter} unfinished tasks left`
}

function errorHandler(errorObject) {
  todoContainer.classList.add("get")

  const todo = document.createElement("div")
  const text = document.createElement("p")

  todo.classList.add("todo")

  text.textContent = errorObject

  todo.append(text)

  todoContainer.append(todo)
}

function todoUpdateCounter() {
  todoLeft.textContent = `You have ${addTodoCounter} unfinshed task left`
}

function check(event) {
  event.currentTarget.parentElement.classList.add("active")

  addTodoCounter--

  todoUpdateCounter()
}

function deleteItem(event) {
  if (!event.currentTarget.parentElement.classList.contains("active")) {
    addTodoCounter--

    todoUpdateCounter()
  }

  event.currentTarget.parentElement.remove()

  if (addTodoCounter <= 0) {
    todoLeft.textContent = defaultTodoText
  } else todoUpdateCounter()
}

function addTodoDivCheck() {
  if (todoContainer.classList.contains("get")) {
    if (todoContainer.children.length > 0) {
      todoContainer.textContent = ""
      todoLeftDIv.classList.remove("active")

      addTodoCounter = 0
    }

    todoContainer.classList.remove("get")
  }
}
