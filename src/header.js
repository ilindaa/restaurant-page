// Initial Page Load
import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact";

export function loadHeaderNav() {
    const body = document.body;
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    header.classList.add('sticky');
    home.classList.add('homeTab');
    menu.classList.add('menuTab');
    contact.classList.add('contactTab');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    body.insertBefore(header, body.firstChild);
    header.appendChild(nav);
    nav.appendChild(navList);
    navList.appendChild(home);
    navList.appendChild(menu);
    navList.appendChild(contact);

    // Add event listeners
    home.addEventListener('click', homeLoad);
    menu.addEventListener('click', menuLoad);
    contact.addEventListener('click', contactLoad);

    home.addEventListener('click', setActiveTab);
    menu.addEventListener('click', setActiveTab);
    contact.addEventListener('click', setActiveTab);
}

// Clear any previous active tabs, set the newly clicked tab as active
function setActiveTab() {
    let prev = document.getElementsByClassName('active');
    if (prev.length > 0) {
        prev[0].className = prev[0].className.replace('active', '');
    }
    this.classList.add('active');

    scrollToTop();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function setHomeActive() {
    const homeTab = document.querySelector('.homeTab');
    homeTab.classList.add('active');
}