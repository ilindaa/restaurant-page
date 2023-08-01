import './style.css';
import Icon from './Images/yurucamp.jpg';

console.log("Testing");

const content = document.getElementById('content');

const header = document.createElement('h1');
header.textContent = 'Laid-back Camp (Yuru Camp)';
content.appendChild(header);

const myIcon = new Image();
myIcon.src = Icon;
content.appendChild(myIcon);

