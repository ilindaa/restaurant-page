import caroleTuesday from './Images/caroleAndTuesdayOP2.gif';

export function homeLoad() {
    const homeTab = document.querySelector('.homeTab');
    if(homeTab.classList.contains('active')) return;

    const content = document.getElementById('content');
    content.innerHTML = '';

    const homeContainer = document.createElement('div');
    const name = document.createElement('h1');
    const headline = document.createElement('h2');
    const text = document.createElement('p');
    const link = document.createElement('a');
    const img = document.createElement('img');
    link.classList.add('img-link');
    img.classList.add('home-pic');

    homeContainer.classList.add('home-container');
    name.textContent = "CAROLE & TUESDAY × CAFE"
    headline.innerHTML = "Food Images © AREA-Q.<br>Anime Images © BONES, Shinichiro Watanabe/Project CAROLE & TUESDAY."; // Replace with a quote later
    text.textContent = "This page was inspired by a real anime pop-up themed collab cafe from August 9, 2019 to September 1, 2019 in Harajuku's AREA-Q cafe."; // Replace later
    link.href = "http://caroleandtuesday.com/";
    link.target = "_blank";
    img.src = caroleTuesday;

    content.appendChild(homeContainer);
    homeContainer.append(name);
    homeContainer.append(headline, link, text);
    link.append(img);
}