import './styles/index.css';
const mobileBg = require('./assets/images/bg-mobile-light.jpg');

const age: number = 99;
console.log(age);

const image = new Image();
image.src = mobileBg;

document.documentElement.append(image);
