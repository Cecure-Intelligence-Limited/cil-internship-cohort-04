const userInput = document.querySelector<HTMLInputElement>("#todo-task")
const addTodoBtn = document.querySelector<HTMLButtonElement>(".add-todo")
const todoContainer = document.querySelector<HTMLDivElement>(".todo-div")
const todoLeft =
  document.querySelector<HTMLParagraphElement>(".curent-todo-left")

const defaultTodoText = todoLeft?.textContent

let todoCounter = 0

addTodoBtn?.addEventListener("click", newTodoCreation)

function newTodoCreation(): void {
  const inputCheck = inputValidation()

  if (inputCheck) {
    const newTodo: HTMLDivElement = divsCreation()

    todoContainer?.append(newTodo)

    todoCounter++

    todoUpdateCounter()

    if (userInput === null) return

    userInput.value = ""
  } else {
    return
  }
}

function inputValidation(): boolean {
  if (userInput?.value !== "") {
    return true
  } else {
    return false
  }
}

function divsCreation(): HTMLDivElement {
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

  text.textContent = userInput?.value as string

  deleteTodo.innerHTML = `<img src="img/icon-cross.svg" alt="" />`

  todo.append(checkBtn)
  todo.append(text)
  todo.append(deleteTodo)

  checkBtn.addEventListener("click", check)
  deleteTodo.addEventListener("click", deleteItem)

  return todo
}

function todoUpdateCounter(): void {
  if (todoLeft === null) return

  todoLeft.textContent = `You have ${todoCounter} unfinshed task left`
}

function check(event: Event): void {
  const currentDiv = event.currentTarget as HTMLDivElement

  currentDiv.parentElement?.classList.add("active")

  todoCounter--

  todoUpdateCounter()
}

function deleteItem(event: Event): void {
  const currentDiv = event.currentTarget as HTMLDivElement

  if (!currentDiv.parentElement?.classList.contains("active")) {
    todoCounter--

    todoUpdateCounter()
  }

  currentDiv.parentElement?.remove()

  if (todoCounter <= 0) {
    if (todoLeft === null) return

    todoLeft.textContent = defaultTodoText as string
  } else todoUpdateCounter()
}
