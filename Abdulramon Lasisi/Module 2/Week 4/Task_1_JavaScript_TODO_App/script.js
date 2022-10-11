const userInput = document.querySelector("#todo-task")
const addTodoBtn = document.querySelector(".add-todo")
const todoContainer = document.querySelector(".todo-div")
const todoLeft = document.querySelector(".curent-todo-left")
const defaultTodoText = todoLeft.textContent

let todoCounter = 0

addTodoBtn.addEventListener("click", newTodoCreation)

function newTodoCreation() {
  const inputCheck = inputValidation()

  if (inputCheck) {
    const newTodo = divsCreation()

    todoContainer.append(newTodo)

    todoCounter++

    todoUpdateCounter()

    userInput.value = ""
  } else {
    return
  }
}

function inputValidation() {
  if (userInput.value !== "") {
    return true
  } else {
    return false
  }
}

function divsCreation() {
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

function todoUpdateCounter() {
  todoLeft.textContent = `You have ${todoCounter} unfinshed task left`
}

function check(event) {
  event.currentTarget.parentElement.classList.add("active")

  todoCounter--

  todoUpdateCounter()
}

function deleteItem(event) {
  if (!event.currentTarget.parentElement.classList.contains("active")) {
    todoCounter--

    todoUpdateCounter()
  }

  event.currentTarget.parentElement.remove()

  if (todoCounter <= 0) {
    todoLeft.textContent = defaultTodoText
  } else todoUpdateCounter()
}
