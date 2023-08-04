import yurucampjpg from './Images/yurucamp.jpg';

export function loadHeaderNav() {
    const body = document.body;
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

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

export function homeLoad() {
    const homeTab = document.querySelector('.homeTab');
    if(homeTab.classList.contains('active')) return;

    const content = document.getElementById('content');
    clearContent();

    const restaurantName = document.createElement('h1');
    const headline = document.createElement('h2');
    const restaurantText = document.createElement('p');
    const yurucamp = new Image();

    restaurantName.textContent = "Yuru Camp Restaurant"
    headline.textContent = "Restaurant Headline";
    restaurantText.textContent = "This restaurant is super pog! POG, SHEESH, and BASED.";
    yurucamp.src = yurucampjpg;
    yurucamp.classList.add('restaurantImg');

    content.append(restaurantName);
    content.appendChild(headline);
    content.appendChild(restaurantText);
    content.appendChild(yurucamp);
}

function menuLoad() {
    const menuTab = document.querySelector('.menuTab');
    if(menuTab.classList.contains('active')) return;

    const content = document.getElementById('content');
    clearContent();

    const p = document.createElement('p');
    
    p.textContent = 'Menu Content!';

    content.appendChild(p);
}

function contactLoad() {
    const contactTab = document.querySelector('.contactTab');
    if(contactTab.classList.contains('active')) return;

    const content = document.getElementById('content');
    clearContent();
    
    const p = document.createElement('p');
    const map = document.createElement('iframe');

    p.textContent = 'Contact Content!';
    
    map.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12961.846866709979!2d139.694252!3d35.690254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd4741c62e1%3A0x51d797d25c62db8d!2sKeio%20Plaza%20Hotel!5e0!3m2!1sen!2sus!4v1691110389286!5m2!1sen!2sus';
    map.width = '400';
    map.height = '300';
    map.style.border = '0';
    map.allowFullscreen = '';
    map.loading = 'lazy';
    map.referrerPolicy = 'no-referrer-when-downgrade';

    content.appendChild(p);
    content.appendChild(map);
}

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

// Clear any previous active tabs, set the newly clicked tab as active
function setActiveTab() {
    let prev = document.getElementsByClassName('active');
    if (prev.length > 0) {
        prev[0].className = prev[0].className.replace('active', '');
    }
    this.classList.add('active');
}

export function setHomeActive() {
    const homeTab = document.querySelector('.homeTab');
    homeTab.classList.add('active');
}