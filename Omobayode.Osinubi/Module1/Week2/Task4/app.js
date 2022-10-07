const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('links')[0]
const contact = document.getElementsByClassName('cta')[0]

console.log(navbarLinks)
toggleButton.addEventListener('click', () =>{
  navbarLinks.classList.toggle('active');
  contact.classList.toggle('active');
})