import fd0 from './Images/FoodDrink/0-Carol-Cola-Float.jpg';
import fd1 from './Images/FoodDrink/1-Tuesday-Tapioca-Milk-Tea.jpg';
import fd2 from './Images/FoodDrink/2-Angela-Durian-Mango-Cider.jpg';
import fd3 from './Images/FoodDrink/3-Gus-Bourbon-Whiskey.jpg';
import fd4 from './Images/FoodDrink/4-Roddy-Strawbery-Fruit-Soda.jpg';
import fd5 from './Images/FoodDrink/5-Tao-Black-Coffee.jpg';
import fd6 from './Images/FoodDrink/6-Dahlia-Rose-Tea.jpg';
import fd7 from './Images/FoodDrink/7-Ertegun-Cherry-Sparkling.jpg';
import fd8 from './Images/FoodDrink/8-Big-Jump-Burger.jpg';
import fd9 from './Images/FoodDrink/9-Tortilla-Sandwich.jpg';
import fd10 from './Images/FoodDrink/10-Cafe-Special-Mars-Sand.jpg';
import fd11 from './Images/FoodDrink/11-Anmitsu.jpg';

import p0 from './Images/Polaroids/caroleandtuesday.png';
import p1 from './Images/Polaroids/angela.png';
import p2 from './Images/Polaroids/gus.png';
import p3 from './Images/Polaroids/roddy.png';
import p4 from './Images/Polaroids/tao.png';
import p5 from './Images/Polaroids/dahlia.png';
import p6 from './Images/Polaroids/ertegun.png';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

// const formatter = new Intl.NumberFormat('ja-JP', {
//     style: 'currency',
//     currency: 'JPY',
// });

// const for now maybe will allow change from USD to JPY prices
const foodMenu = (() => {
    const price0 = 7.00;
    const price1 = 8.00;
    const price2 = 9.00;
    const price3 = 10.00;

    const menuArr = [
        {name: 'Carol\'s Cola Float', description: 'A refreshing ice cream cola float topped with a cherry and mint leaf garnish.', price: formatter.format(price0), photo: fd0, polaroid: p0},
        {name: 'Tuesday\'s Tapioca Milk Tea', description: 'Tuesday\'s favorite bubble tea with lots of tapioca pearls!', price: formatter.format(price0), photo: fd1, polaroid: p0},
        {name: 'Angela\'s Durian Mango Cider', description: 'Angela\'s favorite durian drink with a tropical twist.', price: formatter.format(price0), photo: fd2, polaroid: p1},
        {name: 'Gus\'s Bourbon Whiskey', description: '<strong>*This is an alcoholic product.</strong><br>The perfect drink for alcohol drinkers and drummers.', price: formatter.format(price1), photo: fd3, polaroid: p2},
        {name: 'Roddy\'s Strawberry Fruit Soda', description: 'Roddy\'s as cool as his drink (literally).', price: formatter.format(price0), photo: fd4, polaroid: p3},
        {name: 'Tao\'s Black Coffee', description: 'A stoic drink for a stoic man.', price: formatter.format(price0), photo: fd5, polaroid: p4},
        {name: 'Dahlia\'s Rose Tea', description: 'Roses are red, violets are purple (like her hair) not blue.', price: formatter.format(price0), photo: fd6, polaroid: p5},
        {name: 'Ertegun\'s Cherry Sparkling', description: '<strong>*This is an alcoholic product.</strong><br>For fancy alcohol drinkers and DJs.', price: formatter.format(price1), photo: fd7, polaroid: p6},
        {name: 'Big Jump Burger', description: 'Big Jump Burger\'s \"Jumping Set\" with some fried potato slices on the side.', price: formatter.format(price2), photo: fd8, polaroid: ''},
        {name: 'Tortilla Sandwich', description: 'Can I get the sauce for what\'s next to the tortilla sandwich?', price: formatter.format(price3), photo: fd9, polaroid: ''},
        {name: 'Cafe Special Mars Sandwich', description: 'Martians and Earthlings will surely eat this sandwich up.', price: formatter.format(price0), photo: fd10, polaroid: ''},
        {name: 'Anmitsu', description: 'Tuesday\'s favorite anmitsu; a cold dessert made of jelly, fruits, and ice cream.', price: formatter.format(price1), photo: fd11, polaroid: ''},
    ];

    return { menuArr };
})

export function menuLoad() {
    const menuTab = document.querySelector('.menuTab');
    const menu = foodMenu().menuArr;

    if(menuTab.classList.contains('active')) return;

    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    content.appendChild(menuContainer);

    const menuName = document.createElement('h1');
    menuName.textContent = 'Carole & Tuesday Menu';
    menuContainer.appendChild(menuName);

    for (let i = 0; i < menu.length; i++) {
        const itemDiv = document.createElement('div');
        const itemName = document.createElement('h2');
        const itemDescription = document.createElement('p');
        const itemPrice = document.createElement('p');
        const itemPhotoDiv = document.createElement('div');

        const itemPhoto = new Image();
        const itemPolaroid = new Image();

        itemDiv.classList.add('menu-item');
        itemPhoto.classList.add('menu-photo');
        itemPhotoDiv.classList.add('menu-photo-div');

        itemName.textContent = menu[i].name;
        itemDescription.innerHTML = menu[i].description;
        itemPrice.textContent = menu[i].price;
        itemPhoto.src = menu[i].photo;

        // Food Headers
        if (i === 0) {
            const foodHeader = document.createElement('h2');
            foodHeader.textContent = 'Beverages';
            menuContainer.appendChild(foodHeader);
        } else if (i === 8) {
            const foodHeader = document.createElement('h2');
            foodHeader.textContent = 'Brunch';
            menuContainer.appendChild(foodHeader);
        } else if (i === 11) {
            const foodHeader = document.createElement('h2');
            foodHeader.textContent = 'Desserts';
            menuContainer.appendChild(foodHeader);
        }

        menuContainer.appendChild(itemDiv);
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(itemPhotoDiv);
        itemPhotoDiv.appendChild(itemPhoto);
        itemDiv.appendChild(itemDescription);

        if (menu[i].polaroid != '') {
            itemPolaroid.src = menu[i].polaroid;
            itemPolaroid.classList.add('menu-polaroid');
            itemPhotoDiv.appendChild(itemPolaroid);
        }
    }
}