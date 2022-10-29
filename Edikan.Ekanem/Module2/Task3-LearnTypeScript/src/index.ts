// Create a "close" button and append it to each list item
let myList = document.getElementsByTagName("li");
let i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// Click on a close button to hide the current list item
let closeBtn = document.getElementsByClassName("close");

for (i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function (this: any) {
    var div = this.parentElement;
    div.style.display = "none";
  });
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("ul") as HTMLUListElement;

list.addEventListener(
  "click",
  function (ev: any) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = (<HTMLInputElement>document.getElementById("myInput")).value;
  let t = document.createTextNode(inputValue);
  let ul = document.getElementById("myUL") as HTMLUListElement
  li.appendChild(t);
  if (inputValue === "") {
    alert("Please input a To-do task!");
  } else {
    ul.appendChild(li);
  }
  inputValue = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function (this: any) {
    var div = this.parentElement;
    div.style.display = "none";
  });
}
}
