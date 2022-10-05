'use strict';
const itemBox = document.querySelector('.to-do-items');

const btn = document.getElementById('btn');
const itemContainer = document.querySelector('.to-do-container');
const input = document.querySelector('#input');
const date = document.querySelector('.day');
const checkBox = document.querySelector('.check');
const textBox = document.querySelector('.text');
///////////Getting the day of the week/////
const d = new Date;
let day = d.getDay();
let dayOfTheWeek;
switch (day) {
  case 0:
    dayOfTheWeek = "Sunday";
    break;
  case 1:
    dayOfTheWeek = "Monday";
    break;
    case 2:
      dayOfTheWeek = "Tuesday";
      break;
      case 3:
        dayOfTheWeek = "Wednesday";
        break;
        case 4:
          dayOfTheWeek = "Thursday";
          break;
          case 5:
            dayOfTheWeek = "Friday";
            break;
            case 6:
              dayOfTheWeek = "Saturday";
              break;
              default:
}
///////Inserting the day of the week into the h3 element//////
date.textContent = dayOfTheWeek;


///////////////////////Function for input submission//////////
const clickEvent = function () {
  if(document.getElementById('input').value){
    const newTask = document.getElementById('input').value;
    const html = `
    <div class="to-do-items">
      <div class="text">
        ${newTask}
      </div>

      <div class="icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle check" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3 delete" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
  </svg>

      </div>

    </div>`;

    itemContainer.insertAdjacentHTML('beforeend', html);
    // console.log(document.querySelectorAll('.to-do-items').length);
    const checkBoxes = document.querySelectorAll('.check');
    const deleteIcons = document.querySelectorAll('.delete');
    console.log(checkBoxes.length);
    const tasks = document.querySelectorAll('.to-do-items');
    tasks.forEach((task, i) => {
      checkBoxes[i].addEventListener('click', function(){
        task.classList.add('strike-through');
        task.style.backgroundColor = '#c4cfc7';
        this.style.fill = '#00ff40';
      })
    for(let i = 0; i < tasks.length; i++){
      deleteIcons[i].addEventListener('click', ()=> tasks[i].remove())
    }
    });
  } else{
    alert('Please enter a new task!');
  }


}

btn.addEventListener('click', clickEvent);
input.addEventListener('keydown', function(e) {
  if(e.key === "Enter"){
     clickEvent();
  }
})
