// Initial Page Load
import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact";
import ctLogo from "./Images/ctLogo.png";

export function loadHeaderNav() {
    const body = document.body;
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    const logo = document.createElement('img');

    header.classList.add('sticky');
    home.classList.add('homeTab');
    menu.classList.add('menuTab');
    contact.classList.add('contactTab');
    logo.classList.add('stickyLogo');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    logo.src = ctLogo;

    body.insertBefore(header, body.firstChild);
    header.append(logo, nav);
    nav.append(navList);
    navList.append(home, menu, contact);

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