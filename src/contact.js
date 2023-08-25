export function contactLoad() {
    const contactTab = document.querySelector('.contactTab');
    if(contactTab.classList.contains('active')) return;

    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactContainer = document.createElement('div');
    const header = document.createElement('h1');
    const map = document.createElement('iframe');
    const email = document.createElement('p');
    const number = document.createElement('p');
    const address = document.createElement('p');
    const disclaimer = document.createElement('p');

    contactContainer.classList.add('contact-container');
    header.textContent = 'Contact Us';
    email.textContent = 'Email: noreply@cartue.com'
    number.textContent = 'Phone: 123-456-7890';
    address.textContent = 'Disappointment Island, New Zealand';
    disclaimer.innerHTML = '<br>Disclaimer: The images do not belong to me and are used for educational purposes only.<br>Food images © AREA-Q. Anime images © BONES, Shinichiro Watanabe/Project CAROLE & TUESDAY.';

    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20257.071156231214!2d165.95303242333438!3d-50.60604949733799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9b37960d3cdddd7%3A0xbd1bca4ab10f2187!2sDisappointment%20Island!5e0!3m2!1sen!2sus!4v1692927668123!5m2!1sen!2sus';
    map.width = '400';
    map.height = '300';
    map.style.border = '0';
    map.allowFullscreen = '';
    map.loading = 'lazy';
    map.referrerPolicy = 'no-referrer-when-downgrade';
    map.style.padding = '1.5rem 0rem';

    content.appendChild(contactContainer);
    contactContainer.appendChild(header);
    contactContainer.appendChild(email);
    contactContainer.appendChild(number);
    contactContainer.appendChild(map);
    contactContainer.appendChild(address);
    contactContainer.appendChild(disclaimer);
}