const hamburgerImg = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');

const toggleDropdown = () => {
  navMenu.classList.toggle('showMenu');
};

hamburgerImg.addEventListener('click', toggleDropdown);
