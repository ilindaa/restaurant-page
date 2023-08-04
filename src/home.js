import yurucampjpg from './Images/yurucamp.jpg';

export function homeLoad() {
    const homeTab = document.querySelector('.homeTab');
    if(homeTab.classList.contains('active')) return;

    const content = document.getElementById('content');
    content.innerHTML = '';

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