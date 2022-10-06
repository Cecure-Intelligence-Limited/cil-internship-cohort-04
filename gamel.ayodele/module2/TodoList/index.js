const button = document.querySelector(".press");

const input = document.querySelector(".box1 input");

const secondDiv = document.querySelector(".box2");

const ul = document.querySelector(".new-task");

button.addEventListener("click", addTask);

function addTask() {
  if (input.value.length == 0) {
    alert("Please Enter a Task");
  } else {
    const li = document.createElement("li");

    li.classList.add("new-info");
    const output = `
                    
                    <span class="new-text">${input.value}</span>
                    <button class="delete btn"><img src="delete.png" alt="" class="img" /></button>
    `;
    li.innerHTML = output;
    ul.appendChild(li);

    //To remove completed task
    let deleteTasks = document.querySelectorAll(".delete");

    for (var i = 0; i < deleteTasks.length; i++) {
      deleteTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
}
