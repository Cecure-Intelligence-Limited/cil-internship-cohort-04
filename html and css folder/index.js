const submitBtn = document.querySelector("#submitBtn");
var errorMessage = document.querySelector(".error-message");
var successMessage = document.querySelector(".success-message");

// remove error message 
const removeMessage = () =>{
    setTimeout(() => {
      errorMessage.classList.add("d-none")
    },3000) 
   };
  
  //remove success message
   const removeSuccessMessage = () =>{
    setTimeout(() => {
      successMessage.classList.add("d-none")
    },5000) 
};

//format messages
errorMessage.style.padding = "2px";
errorMessage.style.fontWeight = "Bold";
successMessage.style.padding = "2px";
successMessage.style.fontWeight = "Bold";

//Clear Form
const clearForm= () =>{
    document.querySelector("#my-form").reset();
}

window.onscroll = function () {
    fixHeader()
};

//Fix Header on Scroll
let header = document.getElementById("header");
let bizDiv = document.getElementById("bizArea");
let stickyHeader= header.offsetTop;

function fixHeader(){
    if(window.pageYOffset > stickyHeader){
        header.classList.add("sticky");
        // bizDiv.classList.remove("biz-areaM")
    } else {
        header.classList.remove("sticky");
    }
};

//Validate Contact Us form
submitBtn.addEventListener("click", (event)=>{
  var fName = document.querySelector("#F-name").value;
  var lName = document.querySelector("#L-name").value;
  var phone = document.querySelector("#phone").value;
  var email = document.querySelector("#email").value;
  var company = document.querySelector("#company").value;
  var companyRole = document.querySelector("#company-role").value;
  var topic = document.querySelector("#topic").value;
  var message = document.querySelector("#message-details").value;
  
    event.preventDefault();

    //validate form fields
  var text;
  if(fName.length < 3 || fName === "" ){
    text = "Please Enter valid First Name";
    errorMessage.innerHTML = text;
    errorMessage.classList.remove('d-none')
    removeMessage();
    return false;
  }
  if(lName.length < 3){
    text = "Please Enter valid Last Name";
    errorMessage.innerHTML = text;
    errorMessage.classList.remove('d-none')
    removeMessage();
    return false;
  }
  if(phone === ""){
    text = "Please Enter valid Phone Number";
    errorMessage.innerHTML = text;
    errorMessage.classList.remove('d-none')
    removeMessage();
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 4){
    text = "Please Enter valid Email";
    errorMessage.innerHTML = text;
    errorMessage.classList.remove('d-none')
    removeMessage();
    return false;
  }
  if(company === ""){
    text= "Please Enter Your Company Name";
    errorMessage.innerHTML = text;
    errorMessage.classList.remove('d-none')
    removeMessage();
    return false;
  }
  if(companyRole == ""){
    text= "Please Enter Your Designation in The Company";
    errorMessage.innerHTML = text;
    errorMessage.classList.remove('d-none')
    removeMessage();
    return false;
  }
  if(topic.length < 5){
    text = "Please Enter Enquiry Subject";
    errorMessage.innerHTML = text;
    errorMessage.classList.remove('d-none')
    removeMessage();
    return false;
  }
  if(message.length <= 10){
    text = "Please Enter More Details of your enquiry";
    errorMessage.innerHTML = text;
    errorMessage.classList.remove('d-none')
    removeMessage();
    return false;
  }


  //get form data
  let myForm =document.getElementById('my-form')
  var formData = new FormData(myForm);
   postData(formData);
})

async function postData(formData){
    const response = await fetch('sendmail.php',{
        method: 'POST',
        body: formData
    });
    const data = await response.text();
    console.log(data);
    if(data){
        successMessage.innerHTML= data;
        removeSuccessMessage();
    } else{
        errorMessage.innerHTML='Failed to send enquiry.please try again!'
        removeMessage();
    }
    clearForm();
}

//link social media pages
var socialIcons= document.querySelectorAll('.social')
    for(var i in socialIcons){
     socialIcons[i].onclick =(e) =>{
    var socialId = e.target.getAttribute('link');
   if(socialId !== null && socialId !== undefined){
       window.open(socialId,'_blank');
   }
    }
  }

  //Show and hide Text
document.querySelectorAll(".brief").forEach((div) => {
  div.querySelector("a").addEventListener("click", function () {
  div.classList.toggle("show-more");
  this.textContent = div.classList.contains("show-more") ? "Read Less" : "Read More";
});
});

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))