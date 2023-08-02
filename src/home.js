import yurucampjpg from './Images/yurucamp.jpg';

export function initialPageLoad() {
    /* Header, Nav */
    const body = document.body;
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    body.insertBefore(header, body.firstChild);
    header.appendChild(nav);
    nav.appendChild(navList);
    navList.appendChild(home);
    navList.appendChild(menu);
    navList.appendChild(contact);

    /* Content */
    const content = document.getElementById('content');
    const restaurantName = document.createElement('h1');
    const headline = document.createElement('h2');
    const restaurantText = document.createElement('p');
    const yurucamp = new Image();

    restaurantName.textContent = "Yuru Camp Pop-up Restaurant"
    headline.textContent = "Restaurant Headline";
    restaurantText.textContent = "This restaurant is super pog! POG, SHEESH, and BASED.";
    yurucamp.src = yurucampjpg;
    yurucamp.classList.add('restaurantImg');

    content.append(restaurantName);
    content.appendChild(headline);
    content.appendChild(restaurantText);
    content.appendChild(yurucamp);
}