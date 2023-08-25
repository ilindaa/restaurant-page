export function homeLoad() {
    const homeTab = document.querySelector('.homeTab');
    if(homeTab.classList.contains('active')) return;

    const content = document.getElementById('content');
    content.innerHTML = '';

    const homeContainer = document.createElement('div');
    const name = document.createElement('h1');
    const headline = document.createElement('h2');
    const text = document.createElement('p');

    homeContainer.classList.add('home-container');
    name.textContent = "Carole & Tuesday Cafe"
    headline.textContent = "Cafe Headline"; // Replace with a quote later
    text.textContent = "Cafe Text"; // Replace later

    content.appendChild(homeContainer);
    homeContainer.append(name);
    homeContainer.appendChild(headline);
    homeContainer.appendChild(text);
}