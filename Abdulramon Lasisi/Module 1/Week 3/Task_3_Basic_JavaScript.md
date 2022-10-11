# JScript Call to Backend

const ul = document.createElement("ul");
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
.then((res) => {
return res.json();
})
.then((data) => {
data.map((data) => {
const li = document.createElement("li");

      li.innerText = JSON.stringify(data);

      ul.appendChild(li);
    });

})
.catch((err) => {
console.log(err);
});

//Optional to display in HTML uncomment below:
/_ const body = document.querySelector("body");
body.appendChild(ul); _/
