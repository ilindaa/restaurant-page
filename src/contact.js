export function contactLoad() {
    const contactTab = document.querySelector('.contactTab');
    if(contactTab.classList.contains('active')) return;

    const content = document.getElementById('content');
    content.innerHTML = '';
    
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