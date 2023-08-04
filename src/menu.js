export function menuLoad() {
    const menuTab = document.querySelector('.menuTab');
    if(menuTab.classList.contains('active')) return;

    const content = document.getElementById('content');
    content.innerHTML = '';

    const p = document.createElement('p');
    
    p.textContent = 'Menu Content!';

    content.appendChild(p);
}